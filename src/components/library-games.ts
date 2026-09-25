import gamesData from '../data/all-games-seed.json';
import { openGameDetailsDialog } from './game-details-dialog';

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

const imageModules = import.meta.glob('/public/images/games/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const assetModules = import.meta.glob('../assets/images/games/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const resolveImagePath = (path: string): string => {
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

export const createLibraryGameCard = (game: LibraryGame): HTMLElement => {
  const card = document.createElement('article');
  card.className = 'library-card';

  const media = document.createElement('div');
  media.className = 'library-card__media';

  const img = document.createElement('img');
  img.src = resolveImagePath(game.cardImage);
  img.alt = game.name;
  img.className = 'library-card__img';
  img.loading = 'lazy';

  media.append(img);

  const content = document.createElement('div');
  content.className = 'library-card__content';

  const header = document.createElement('div');
  header.className = 'library-card__header';

  const titleGroup = document.createElement('div');
  titleGroup.className = 'library-card__title-group';

  const title = document.createElement('h3');
  title.className = 'library-card__title';
  title.textContent = game.name;

  const categoryBadge = document.createElement('span');
  categoryBadge.className = 'library-card__category';
  categoryBadge.textContent = game.category;

  titleGroup.append(title, categoryBadge);

  const priceDesktop = document.createElement('span');
  priceDesktop.className = 'library-card__price';
  priceDesktop.textContent = game.price;

  header.append(titleGroup, priceDesktop);

  const desc = document.createElement('p');
  desc.className = 'library-card__desc';
  desc.textContent = game.shortDescription;

  const footer = document.createElement('div');
  footer.className = 'library-card__footer';

  const stats = document.createElement('div');
  stats.className = 'library-card__stats';

  const statsGroup = document.createElement('div');
  statsGroup.className = 'library-card__stats-group';

  // Контурная звезда (без заливки)
  const ratingStat = document.createElement('div');
  ratingStat.className = 'library-card__stat';
  ratingStat.innerHTML = `
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span>${game.rating.toFixed(1)}</span>
  `;

  // Контурное сердце (без заливки)
  const likesStat = document.createElement('div');
  likesStat.className = 'library-card__stat';
  likesStat.innerHTML = `
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${formatLikes(game.likesCount)}</span>
  `;

  statsGroup.append(ratingStat, likesStat);

  const priceMobile = document.createElement('span');
  priceMobile.className = 'library-card__price--mobile';
  priceMobile.textContent = game.price;

  stats.append(statsGroup, priceMobile);

  const detailsBtn = document.createElement('button');
  detailsBtn.type = 'button';
  detailsBtn.className = 'library-card__btn';
  detailsBtn.textContent = 'Details';

  detailsBtn.addEventListener('click', () => {
    openGameDetailsDialog();
  });

  footer.append(stats, detailsBtn);
  content.append(header, desc, footer);
  card.append(media, content);

  return card;
};

export const createLibraryGamesSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'library-games';

  const container = document.createElement('div');
  container.className = 'library-games__container';

  const grid = document.createElement('div');
  grid.className = 'library-games__grid';

  const gamesList: LibraryGame[] = gamesData.data;

  gamesList.forEach((game) => {
    grid.append(createLibraryGameCard(game));
  });

  container.append(grid);
  section.append(container);

  return section;
};