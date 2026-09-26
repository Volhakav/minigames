import gameDataSeed from '../data/game-tukoni-forest-keepers.json';
import commentsDataSeed from '../data/comments-tukoni-forest-keepers.json';

export interface GameRecord {
  position: number;
  playerName: string;
  score: number;
  achievedAt: string;
}

export interface GameDetails {
  slug: string;
  name: string;
  heroImage: string;
  rating: number;
  likesCount: number;
  isLikedByCurrentUser: boolean;
  fullDescription: string;
  specs: {
    genre: string;
    players: string;
    duration: string;
    price: string;
  };
  topRecords: GameRecord[];
}

export interface RawCommentItem {
  id?: string;
  author?: string;
  authorName?: string;
  userName?: string;
  avatarBg?: string;
  createdAt?: string;
  timestamp?: string;
  text?: string;
  content?: string;
  likesCount?: number;
  likes?: number;
  isLikedByCurrentUser?: boolean;
  isLiked?: boolean;
  liked?: boolean;
}

const imageModules = import.meta.glob('/public/images/games/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const assetModules = import.meta.glob('../assets/images/games/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const resolveImagePath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const fileName = path.split('/').pop();
  if (!fileName) return path;

  const publicKey = `/public/images/games/${fileName}`;
  if (imageModules[publicKey]) {
    return imageModules[publicKey];
  }

  const assetKey = `../assets/images/games/${fileName}`;
  if (assetModules[assetKey]) {
    return assetModules[assetKey];
  }

  return path;
};

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

const formatRelativeTime = (dateString?: string): string => {
  if (!dateString) return 'recently';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const now = new Date('2026-08-30T10:00:00Z');
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 3600) {
    const mins = Math.max(1, Math.floor(diffInSeconds / 60));
    return `${mins} ${mins === 1 ? 'minute' : 'minutes'} ago`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
  const days = Math.floor(diffInSeconds / 86400);
  return `${days} ${days === 1 ? 'day' : 'days'} ago`;
};

const getAvatarColor = (name: string): string => {
  if (name.startsWith('F') || name.toLowerCase().includes('forest')) return '#bae6fd';
  if (name.startsWith('H') || name.toLowerCase().includes('herbal')) return '#fef08a';
  if (name.startsWith('C') || name.toLowerCase().includes('cottage')) return '#e2e8f0';
  return '#e0f2fe';
};

export const createGameDetailsDialog = (): HTMLElement => {
  const gameData: GameDetails = (gameDataSeed as any).data || gameDataSeed;
  const rawComments: RawCommentItem[] = (commentsDataSeed as any).data || commentsDataSeed || [];

  const backdrop = document.createElement('div');
  backdrop.className = 'game-dialog-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'game-dialog';

  const recordsHtml = (gameData.topRecords || [])
    .map(
      (rec) => `
      <div class="game-dialog__record-item">
        <span class="game-dialog__record-user">${getTrophyEmoji(rec.position)} ${rec.playerName}</span>
        <span class="game-dialog__record-score">${formatScore(rec.score)}</span>
        <span class="game-dialog__record-date">${formatRelativeTime(rec.achievedAt)}</span>
      </div>
    `
    )
    .join('');

  const commentsHtml = rawComments
    .map((comment) => {
      const authorName = comment.author || comment.authorName || comment.userName || 'Anonymous';
      const text = comment.text || comment.content || '';
      const likes = comment.likesCount ?? comment.likes ?? 0;
      const rawDate = comment.createdAt || comment.timestamp;
      const displayTime = formatRelativeTime(rawDate);
      const bg = comment.avatarBg || getAvatarColor(authorName);
      const initial = authorName.charAt(0).toUpperCase();

      const isLiked = Boolean(
        comment.isLikedByCurrentUser ?? comment.isLiked ?? comment.liked
      );

      return `
        <article class="game-dialog__comment">
          <div class="game-dialog__comment-header">
            <div class="game-dialog__comment-author">
              <div class="game-dialog__avatar" style="background-color: ${bg};">
                ${initial}
              </div>
              <span class="game-dialog__author-name">${authorName}</span>
            </div>
            <span class="game-dialog__comment-time">${displayTime}</span>
          </div>
          <p class="game-dialog__comment-text">${text}</p>
          <button type="button" class="game-dialog__like-btn${isLiked ? ' game-dialog__like-btn--active' : ''}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${isLiked ? '#ff4b4b' : 'none'}" stroke="#ff4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>${likes}</span>
          </button>
        </article>
      `;
    })
    .join('');

  dialog.innerHTML = `
    <header class="game-dialog__hero">
      <img 
        src="${resolveImagePath(gameData.heroImage)}" 
        alt="${gameData.name} Cover" 
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
          <h2 class="game-dialog__title">${gameData.name}</h2>
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
              <span>${formatLikes(gameData.likesCount || 0)}</span>
            </div>
          </div>
        </div>

        <p class="game-dialog__description">
          ${gameData.fullDescription}
        </p>

        <div class="game-dialog__meta-grid">
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Genre</span>
            <span class="game-dialog__meta-value">${gameData.specs?.genre || ''}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Players</span>
            <span class="game-dialog__meta-value">${gameData.specs?.players || ''}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Duration</span>
            <span class="game-dialog__meta-value">${gameData.specs?.duration || ''}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Price</span>
            <span class="game-dialog__meta-value">${gameData.specs?.price || ''}</span>
          </div>
        </div>

        <div class="game-dialog__actions">
          <button type="button" class="game-dialog__play-btn">Play Now</button>
          <button type="button" class="game-dialog__fav-btn${gameData.isLikedByCurrentUser ? ' game-dialog__fav-btn--active' : ''}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Add to Favorites</span>
          </button>
        </div>
      </section>

      <section class="game-dialog__section">
        <h3 class="game-dialog__section-title">🏆 Top Records</h3>
        <div class="game-dialog__records-list">
          ${recordsHtml}
        </div>
      </section>

      <section class="game-dialog__section">
        <h3 class="game-dialog__section-title">Comments (${rawComments.length})</h3>
        <div class="game-dialog__comment-input-row">
          <div class="game-dialog__avatar game-dialog__avatar--user">U</div>
          <input type="text" class="game-dialog__input" placeholder="Write a comment..." />
          <button type="button" class="game-dialog__send-btn" aria-label="Send comment">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        <div class="game-dialog__comments-list">
          ${commentsHtml}
        </div>
      </section>
    </div>
  `;

  backdrop.append(dialog);

  const closeBtn = dialog.querySelector('.game-dialog__close');
  const playBtn = dialog.querySelector('.game-dialog__play-btn');
  const favBtn = dialog.querySelector('.game-dialog__fav-btn');
  const likeBtns = dialog.querySelectorAll('.game-dialog__like-btn');

  let isClosing = false;

  const close = () => {
    if (isClosing) return;
    isClosing = true;

    backdrop.classList.add('game-dialog-backdrop--closing');
    document.body.classList.remove('no-scroll');

    document.removeEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      backdrop.remove();
    }, 250);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', handleKeyDown);

  playBtn?.addEventListener('click', (e) => {
    e.preventDefault();
  });

  favBtn?.addEventListener('click', () => {
    favBtn.classList.toggle('game-dialog__fav-btn--active');
  });

  likeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isNowActive = btn.classList.toggle('game-dialog__like-btn--active');
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', isNowActive ? '#ff4b4b' : 'none');
        svg.setAttribute('stroke', '#ff4b4b');
      }
    });
  });

  return backdrop;
};

export const openGameDetailsDialog = (): void => {
  const existingDialog = document.querySelector('.game-dialog-backdrop');
  if (existingDialog) existingDialog.remove();

  const dialogElement = createGameDetailsDialog();
  document.body.append(dialogElement);
  document.body.classList.add('no-scroll');
};