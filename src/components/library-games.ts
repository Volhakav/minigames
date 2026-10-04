import { openGameDetailsDialog } from './game-details-dialog';
import { fetchLibraryGames, resolveApiImageUrl } from '../services/api';
import { showSnackbar } from './snackbar';
import { createLibraryPagination } from './library-pagination';
import { appRouter } from '../index';

export interface LibraryGame {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  rating: number;
  likesCount: number;
  cardImage: string;
  featured?: boolean;
}

const formatLikes = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export const createLibraryGameCard = (game: LibraryGame): HTMLElement => {
  const card = document.createElement('article');
  card.className = 'library-card';

  const media = document.createElement('div');
  media.className = 'library-card__media';

  const img = document.createElement('img');
  img.src = resolveApiImageUrl(game.cardImage);
  img.alt = game.name || 'Game Cover';
  img.className = 'library-card__img';
  img.loading = 'lazy';

  img.addEventListener(
    'error',
    () => {
      img.src = 'https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image';
    },
    { once: true }
  );

  media.append(img);

  const content = document.createElement('div');
  content.className = 'library-card__content';

  const header = document.createElement('div');
  header.className = 'library-card__header';

  const titleGroup = document.createElement('div');
  titleGroup.className = 'library-card__title-group';

  const title = document.createElement('h3');
  title.className = 'library-card__title';
  title.textContent = game.name || 'Untitled';

  const categoryBadge = document.createElement('span');
  categoryBadge.className = 'library-card__category';
  categoryBadge.textContent = game.category || 'All';

  titleGroup.append(title, categoryBadge);

  const priceDesktop = document.createElement('span');
  priceDesktop.className = 'library-card__price';
  priceDesktop.textContent = game.price || 'Free';

  header.append(titleGroup, priceDesktop);

  const desc = document.createElement('p');
  desc.className = 'library-card__desc';
  desc.textContent = game.shortDescription || '';

  const footer = document.createElement('div');
  footer.className = 'library-card__footer';

  const stats = document.createElement('div');
  stats.className = 'library-card__stats';

  const statsGroup = document.createElement('div');
  statsGroup.className = 'library-card__stats-group';

  const ratingStat = document.createElement('div');
  ratingStat.className = 'library-card__stat';
  ratingStat.innerHTML = `
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span>${game.rating ? game.rating.toFixed(1) : '0.0'}</span>
  `;

  const likesStat = document.createElement('div');
  likesStat.className = 'library-card__stat';
  likesStat.innerHTML = `
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${formatLikes(game.likesCount || 0)}</span>
  `;

  statsGroup.append(ratingStat, likesStat);

  const priceMobile = document.createElement('span');
  priceMobile.className = 'library-card__price--mobile';
  priceMobile.textContent = game.price || 'Free';

  stats.append(statsGroup, priceMobile);

  const detailsBtn = document.createElement('button');
  detailsBtn.type = 'button';
  detailsBtn.className = 'library-card__btn';
  detailsBtn.textContent = 'Details';

  detailsBtn.addEventListener('click', () => {
    openGameDetailsDialog(game.slug);
  });

  footer.append(stats, detailsBtn);
  content.append(header, desc, footer);
  card.append(media, content);

  return card;
};

export interface LibraryGamesController {
  element: HTMLElement;
  updateState: (params: { category?: string; sort?: string; page?: number }) => void;
}

export const createLibraryGamesSection = (): LibraryGamesController => {
  const section = document.createElement('section');
  section.className = 'library-games';

  const container = document.createElement('div');
  container.className = 'library-games__container';

  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'library-games__pagination-wrapper';

  section.append(container, paginationContainer);

  const params = appRouter.getQueryParams();
  const currentCategory = params.category || 'all';
  const currentSort = params.sort || 'rating-desc';
  const currentPage = Number.parseInt(params.page || '1', 10);

  const renderSkeleton = (): void => {
    container.innerHTML = `
      <div class="library-games__skeleton-grid">
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
      </div>
    `;
  };

  const renderError = (message: string): void => {
    container.innerHTML = `
      <div class="library-games__error-banner">
        <p class="library-games__error-message">${message}</p>
        <button type="button" class="library-games__retry-btn">Retry</button>
      </div>
    `;
    paginationContainer.innerHTML = '';

    const retryBtn = container.querySelector('.library-games__retry-btn');
    retryBtn?.addEventListener('click', () => {
      loadGames();
    });
  };

  const renderEmpty = (totalPages = 1): void => {
    container.innerHTML = `
      <div class="library-games__empty-state">
        <p>No games found matching your criteria.</p>
      </div>
    `;

    paginationContainer.innerHTML = '';
    const pagination = createLibraryPagination({
      totalPages,
      currentPage: 1,
      onPageChange: (newPage) => {
        appRouter.updateQueryParams({ page: newPage.toString() });
      },
    });
    paginationContainer.append(pagination);
  };

  const renderGrid = (games: LibraryGame[], totalPages: number): void => {
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'library-games__grid';

    for (const game of games) {
      grid.append(createLibraryGameCard(game));
    }

    container.append(grid);

    paginationContainer.innerHTML = '';
    const pagination = createLibraryPagination({
      totalPages,
      currentPage,
      onPageChange: (newPage) => {
        appRouter.updateQueryParams({ page: newPage.toString() });
      },
    });
    paginationContainer.append(pagination);
  };

  const loadGames = async (): Promise<void> => {
    renderSkeleton();

    try {
      const response = await fetchLibraryGames({
        category: currentCategory,
        sort: currentSort,
        page: currentPage,
        limit: 6,
      });

      const totalPages = response.meta?.totalPages || 1;

      if (!response.data || response.data.length === 0) {
        renderEmpty(totalPages);
        return;
      }

      renderGrid(response.data as LibraryGame[], totalPages);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to load library games';
      renderError(errorMsg);
      showSnackbar(errorMsg, 'error');
    }
  };

  loadGames();

  return {
    element: section,
    updateState: ({ category, sort, page }) => {
      const newQueryParams: Record<string, string | undefined> = {};

      if (category !== undefined) {
        newQueryParams.category = category === 'all' ? undefined : category;
        newQueryParams.page = '1';
      }

      if (sort !== undefined) {
        newQueryParams.sort = sort === 'rating-desc' ? undefined : sort;
        newQueryParams.page = '1';
      }

      if (page !== undefined) {
        newQueryParams.page = page === 1 ? undefined : page.toString();
      }

      appRouter.updateQueryParams(newQueryParams);
    },
  };
};