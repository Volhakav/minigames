export interface GameData {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  rating: number;
  likesCount: number;
  cardImage: string;
  featured: boolean;
}

const formatLikes = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export const createGameCard = (game: GameData): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'game-card';

  const img = document.createElement('img');
  img.src = game.cardImage;
  img.alt = game.name;
  img.className = 'game-card__image';

  img.addEventListener('error', () => {
    img.src = 'https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image';
  });

  const overlay = document.createElement('div');
  overlay.className = 'game-card__overlay';

  const title = document.createElement('h3');
  title.className = 'game-card__title';
  title.textContent = game.name;

  const meta = document.createElement('div');
  meta.className = 'game-card__meta';

  const rating = document.createElement('div');
  rating.className = 'game-card__stat game-card__stat--rating';
  rating.innerHTML = `
    <svg class="game-card__icon game-card__icon--star" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFD02B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span>${game.rating.toFixed(1)}</span>
  `;

  const likes = document.createElement('div');
  likes.className = 'game-card__stat game-card__stat--likes';
  likes.innerHTML = `
    <svg class="game-card__icon game-card__icon--heart" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${formatLikes(game.likesCount)}</span>
  `;

  meta.append(rating, likes);
  overlay.append(title, meta);
  card.append(img, overlay);

  return card;
};
