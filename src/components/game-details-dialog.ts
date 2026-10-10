import {
  fetchGameComments,
  fetchGameDetails,
  GameDetails,
  GameRecord,
  RawCommentItem,
  toggleGameFavorite,
} from '../services/api';
import { showSnackbar } from './snackbar';
import { appRouter } from '../index';
import { getValidAppSession } from '../services/session';
import { openAuthDialog } from './auth-dialog';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image';

// Możliwe nazwy pól z obrazkiem (lista gier używa cardImage)
const IMAGE_KEYS = [
  'heroImage',
  'cardImage',
  'imageUrl',
  'image',
  'cover',
  'coverImage',
  'thumbnail',
  'banner',
  'images',
];

// Możliwe nazwy pól z opisem w odpowiedzi szczegółowej
const DESCRIPTION_KEYS = [
  'description',
  'longDescription',
  'fullDescription',
  'about',
  'overview',
  'summary',
  'shortDescription',
];

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const formatLikes = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

const formatScore = (score: number): string => {
  return score.toLocaleString('en-US') + ' pts';
};

const getTrophyEmoji = (position: number): string => {
  if (position === 1) return '🥇';
  if (position === 2) return '🥈';
  if (position === 3) return '🥉';
  return '';
};

export const formatRelativeTime = (dateString?: string): string => {
  if (!dateString) return 'just now';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour ago' : 'hours ago'}`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? 'day ago' : 'days ago'}`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4.34) {
    return `${diffInWeeks} ${diffInWeeks === 1 ? 'week ago' : 'weeks ago'}`;
  }

  const diffInMonths = Math.floor(diffInDays / 30.44);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'month ago' : 'months ago'}`;
  }

  const diffInYears = Math.floor(diffInDays / 365.25);
  return `${diffInYears} ${diffInYears === 1 ? 'year ago' : 'years ago'}`;
};

const getAvatarColor = (name: string): string => {
  if (name.startsWith('F') || name.toLowerCase().includes('forest')) return '#bae6fd';
  if (name.startsWith('H') || name.toLowerCase().includes('herbal')) return '#fef08a';
  if (name.startsWith('C') || name.toLowerCase().includes('cottage')) return '#e2e8f0';
  return '#e0f2fe';
};

// Zamienia wartość z API na adres obrazka (string, tablica albo obiekt z url/src/path).
// Ścieżki względne (np. /assets/images/games/x.jpg) zwracamy bez zmian:
// pliki leżą w aplikacji (frontend), a nie na serwerze API.
const extractImageUrl = (value: unknown): string => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('//')) return `https:${trimmed}`;
    return trimmed;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = extractImageUrl(item);
      if (found) return found;
    }
    return '';
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return extractImageUrl(record.url ?? record.src ?? record.path);
  }
  return '';
};

const resolveGameImage = (game: GameDetails): string => {
  const record = game as unknown as Record<string, unknown>;
  for (const key of IMAGE_KEYS) {
    const found = extractImageUrl(record[key]);
    if (found) return found;
  }
  return '';
};

const resolveGameDescription = (game: GameDetails): string => {
  const record = game as unknown as Record<string, unknown>;
  for (const key of DESCRIPTION_KEYS) {
    const value = record[key];
    if (typeof value === 'string' && value.trim()) return value;
  }
  return '';
};

export const createGameDetailsDialog = (gameSlug: string): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'game-dialog-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'game-dialog';

  backdrop.append(dialog);

  let isClosing = false;
  let isFavPending = false;

  const handleAuthStateChanged = (): void => {
    if (document.body.contains(backdrop) && !isClosing) {
      loadData();
    }
  };

  const close = (updateUrl = true): void => {
    if (isClosing) return;
    isClosing = true;

    backdrop.classList.add('game-dialog-backdrop--closing');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('auth-state-changed', handleAuthStateChanged);

    if (updateUrl) {
      appRouter.updateQueryParams({ game: undefined });
    }

    setTimeout(() => {
      backdrop.remove();
    }, 250);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      close();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('auth-state-changed', handleAuthStateChanged);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  const renderSkeleton = (): void => {
    dialog.innerHTML = `
      <div class="game-dialog__skeleton">
        <div class="game-dialog__skeleton-hero"></div>
        <div class="game-dialog__skeleton-body">
          <div class="game-dialog__skeleton-title"></div>
          <div class="game-dialog__skeleton-text"></div>
          <div class="game-dialog__skeleton-text"></div>
        </div>
      </div>
    `;
  };

  const renderError = (message: string): void => {
    dialog.innerHTML = `
      <div class="game-dialog__error-banner">
        <p class="game-dialog__error-message">${escapeHtml(message)}</p>
        <div class="game-dialog__error-actions">
          <button type="button" class="game-dialog__retry-btn">Retry</button>
          <button type="button" class="game-dialog__close-error-btn">Close</button>
        </div>
      </div>
    `;

    dialog.querySelector('.game-dialog__retry-btn')?.addEventListener('click', () => {
      loadData();
    });

    dialog.querySelector('.game-dialog__close-error-btn')?.addEventListener('click', () => close());
  };

  const renderCommentsSection = (
    comments: RawCommentItem[],
    totalCount: number,
    commentsContainer: HTMLElement
  ): void => {
    const titleEl = commentsContainer.querySelector('.game-dialog__comments-title');
    const listEl = commentsContainer.querySelector('.game-dialog__comments-list');
    if (!listEl) return;

    if (titleEl) {
      titleEl.textContent = `Comments (${totalCount})`;
    }

    if (!comments || comments.length === 0) {
      listEl.innerHTML = `
        <div class="game-dialog__empty-comments">
          <p style="opacity: 0.7; padding: 1rem 0;">No comments yet. Be the first to comment!</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = comments
      .map((comment) => {
        const authorName = comment.author || comment.authorName || comment.userName || 'Anonymous';
        const text = comment.text || comment.content || comment.comment || '';
        const likes = comment.likesCount ?? comment.likes ?? 0;
        const rawDate = comment.createdAt || comment.timestamp || comment.date;
        const displayTime = formatRelativeTime(rawDate);
        const bg = comment.avatarBg || getAvatarColor(authorName);
        const initial = escapeHtml(authorName.charAt(0).toUpperCase());

        const isLiked = Boolean(comment.isLikedByCurrentUser ?? comment.isLiked ?? comment.liked);
        const strokeColor = isLiked ? '#ff4b4b' : '#18152e';

        return `
          <li class="game-dialog__comment-item">
            <article class="game-dialog__comment">
              <div class="game-dialog__comment-header">
                <div class="game-dialog__comment-author">
                  <div class="game-dialog__avatar" style="background-color: ${escapeHtml(bg)};">
                    ${initial}
                  </div>
                  <span class="game-dialog__author-name">${escapeHtml(authorName)}</span>
                </div>
                <span class="game-dialog__comment-time">${escapeHtml(displayTime)}</span>
              </div>
              <p class="game-dialog__comment-text">${escapeHtml(text)}</p>
              <button type="button" class="game-dialog__like-btn${isLiked ? ' game-dialog__like-btn--active' : ''}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>${likes}</span>
              </button>
            </article>
          </li>
        `;
      })
      .join('');
  };

  const renderContent = (gameData: GameDetails): void => {
    const topRecords: GameRecord[] = gameData.topRecords || [];

    const recordsHtml =
      topRecords.length > 0
        ? topRecords
            .map(
              (rec) => `
            <li class="game-dialog__record-item">
              <span class="game-dialog__record-user">${getTrophyEmoji(rec.position)} ${escapeHtml(rec.playerName)}</span>
              <span class="game-dialog__record-score">${formatScore(rec.score)}</span>
              <span class="game-dialog__record-date">${formatRelativeTime(rec.achievedAt)}</span>
            </li>
          `
            )
            .join('')
        : `<li class="game-dialog__record-item" style="opacity: 0.7;">No records achieved yet.</li>`;

    const heroImgUrl = resolveGameImage(gameData);
    const description = resolveGameDescription(gameData);

    const gameRecord = gameData as unknown as { isLikedByCurrentUser?: boolean; isLiked?: boolean };
    let isFavorited = Boolean(gameRecord.isLikedByCurrentUser ?? gameRecord.isLiked);

    dialog.innerHTML = `
      <header class="game-dialog__hero">
        <img
          src="${escapeHtml(heroImgUrl || PLACEHOLDER_IMAGE)}"
          alt="${escapeHtml(gameData.name)} Cover"
          class="game-dialog__hero-img"
        />
        <button type="button" class="game-dialog__zoom-btn" aria-label="Zoom image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button type="button" class="game-dialog__close" aria-label="Close dialog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>

      <div class="game-dialog__body">
        <section class="game-dialog__info">
          <div class="game-dialog__header">
            <h2 class="game-dialog__title">${escapeHtml(gameData.name)}</h2>
            <div class="game-dialog__stats">
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${gameData.rating ? gameData.rating.toFixed(1) : '0.0'}</span>
              </div>
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span class="game-dialog__likes-count">${formatLikes(gameData.likesCount || 0)}</span>
              </div>
            </div>
          </div>

          <p class="game-dialog__description">
            ${escapeHtml(description)}
          </p>

          <div class="game-dialog__meta-grid">
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Genre</span>
              <span class="game-dialog__meta-value">${escapeHtml(gameData.specs?.genre || gameData.category || 'Casual')}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Players</span>
              <span class="game-dialog__meta-value">${escapeHtml(gameData.specs?.players || '1 Player')}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Duration</span>
              <span class="game-dialog__meta-value">${escapeHtml(gameData.specs?.duration || '15-30 mins')}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Price</span>
              <span class="game-dialog__meta-value">${escapeHtml(String(gameData.specs?.price || gameData.price || 'Free'))}</span>
            </div>
          </div>

          <div class="game-dialog__actions">
            <button type="button" class="game-dialog__play-btn">Play Now</button>
            <button
              type="button"
              class="game-dialog__fav-btn${isFavorited ? ' game-dialog__fav-btn--active' : ''}"
              aria-label="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}"
              aria-pressed="${isFavorited ? 'true' : 'false'}"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="game-dialog__fav-btn-text">${isFavorited ? 'Favorited' : 'Add to Favorites'}</span>
            </button>
          </div>
        </section>

        <section class="game-dialog__section game-dialog__records-section">
          <h3 class="game-dialog__section-title">🏆 Top Records</h3>
          <ul class="game-dialog__records-list">
            ${recordsHtml}
          </ul>
        </section>

        <section class="game-dialog__section game-dialog__comments-section">
          <h3 class="game-dialog__section-title game-dialog__comments-title">Comments (...)</h3>

          <form class="game-dialog__comment-form">
            <div class="game-dialog__avatar game-dialog__avatar--user">U</div>
            <textarea
              class="game-dialog__textarea"
              placeholder="Write a comment..."
              rows="1"
              aria-label="Write a comment"
            ></textarea>
            <button type="submit" class="game-dialog__send-btn" aria-label="Send comment">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>

          <ul class="game-dialog__comments-list">
            <div class="game-dialog__comments-skeleton">Loading comments...</div>
          </ul>
        </section>
      </div>
    `;

    const imgEl = dialog.querySelector<HTMLImageElement>('.game-dialog__hero-img');
    if (imgEl) {
      imgEl.addEventListener(
        'error',
        () => {
          imgEl.src = PLACEHOLDER_IMAGE;
        },
        { once: true }
      );
    }

    const closeBtn = dialog.querySelector('.game-dialog__close');
    const playBtn = dialog.querySelector('.game-dialog__play-btn');
    const favBtn = dialog.querySelector<HTMLButtonElement>('.game-dialog__fav-btn');
    const commentForm = dialog.querySelector('.game-dialog__comment-form');
    const textarea = dialog.querySelector<HTMLTextAreaElement>('.game-dialog__textarea');
    const commentsContainer = dialog.querySelector<HTMLElement>('.game-dialog__comments-section');

    closeBtn?.addEventListener('click', () => close());

    playBtn?.addEventListener('click', (e) => {
      e.preventDefault();
    });

    const heartIconSvg = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;

    const updateFavButtonUI = (favorited: boolean, loading = false): void => {
      if (!favBtn) return;
      favBtn.classList.toggle('game-dialog__fav-btn--active', favorited);
      favBtn.classList.toggle('game-dialog__fav-btn--loading', loading);
      favBtn.disabled = loading;
      favBtn.setAttribute('aria-pressed', favorited ? 'true' : 'false');
      favBtn.setAttribute('aria-label', favorited ? 'Remove from favorites' : 'Add to favorites');

      if (loading) {
        favBtn.setAttribute('aria-busy', 'true');
        favBtn.innerHTML = `
          <span class="game-dialog__spinner" aria-hidden="true"></span>
          <span class="game-dialog__fav-btn-text">Updating...</span>
        `;
      } else {
        favBtn.removeAttribute('aria-busy');
        favBtn.innerHTML = `
          ${heartIconSvg}
          <span class="game-dialog__fav-btn-text">${favorited ? 'Favorited' : 'Add to Favorites'}</span>
        `;
      }
    };

    favBtn?.addEventListener('click', async () => {
      if (isFavPending) return;

      const session = getValidAppSession();
      if (!session) {
        showSnackbar('Please log in to manage your favorites.', 'warning');
        openAuthDialog('login');
        return;
      }

      isFavPending = true;
      updateFavButtonUI(isFavorited, true);

      try {
        const result = await toggleGameFavorite(gameSlug, session.email);
        isFavorited = Boolean(result.isFavorited);
        gameData.isLikedByCurrentUser = isFavorited;
        gameData.likesCount = result.likesCount;

        const likesCountEl = dialog.querySelector('.game-dialog__likes-count');
        if (likesCountEl) {
          likesCountEl.textContent = formatLikes(result.likesCount);
        }
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Network error updating favorites.';
        showSnackbar(msg, 'error');
      } finally {
        isFavPending = false;
        updateFavButtonUI(isFavorited, false);
      }
    });

    if (textarea) {
      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 88);
        textarea.style.height = `${newHeight}px`;
      });
    }

    commentForm?.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    if (commentsContainer) {
      loadComments(commentsContainer);
    }
  };

  const loadComments = async (commentsContainer: HTMLElement): Promise<void> => {
    try {
      const response = await fetchGameComments(gameSlug, 3, 'newest');
      const comments = response.data || [];
      const totalCount = response.totalCount ?? comments.length;
      renderCommentsSection(comments, totalCount, commentsContainer);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to load comments';
      showSnackbar(msg, 'error');
      const listEl = commentsContainer.querySelector('.game-dialog__comments-list');
      if (listEl) {
        listEl.innerHTML = `<div class="game-dialog__comments-error">Unable to load comments.</div>`;
      }
    }
  };

  const loadData = async (): Promise<void> => {
    renderSkeleton();
    try {
      const session = getValidAppSession();
      const data = await fetchGameDetails(gameSlug, session?.email);

      renderContent(data);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to load game details';
      renderError(msg);
      showSnackbar(msg, 'error');
    }
  };

  loadData();

  return backdrop;
};

export const openGameDetailsDialog = (gameSlug: string, updateUrl = true): void => {
  if (!gameSlug) {
    return;
  }

  const existingBackdrop = document.querySelector('.game-dialog-backdrop');
  if (existingBackdrop) {
    if (updateUrl) {
      appRouter.updateQueryParams({ game: gameSlug });
    }
    return;
  }

  if (updateUrl) {
    appRouter.updateQueryParams({ game: gameSlug });
  }

  const dialogElement = createGameDetailsDialog(gameSlug);
  document.body.append(dialogElement);
  document.body.classList.add('no-scroll');
};

export const closeGameDetailsDialogQuietly = (): void => {
  const existingDialog = document.querySelector('.game-dialog-backdrop');
  if (existingDialog) {
    document.body.classList.remove('no-scroll');
    existingDialog.remove();
  }
};