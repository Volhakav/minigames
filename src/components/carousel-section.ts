import { GameData, createGameCard } from './game-card';

export const createCarouselSection = (games: GameData[]): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'carousel-section';

  const header = document.createElement('header');
  header.className = 'carousel-section__header';

  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'carousel-section__title-wrapper';

  const badge = document.createElement('span');
  badge.className = 'carousel-section__badge';

  const title = document.createElement('h2');
  title.className = 'carousel-section__title';
  title.textContent = 'New Games';

  titleWrapper.append(badge, title);

  const nav = document.createElement('nav');
  nav.className = 'carousel-section__nav';
  nav.setAttribute('aria-label', 'Carousel Navigation');

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = 'carousel-section__btn carousel-section__btn--prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'carousel-section__btn carousel-section__btn--next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `;

  nav.append(prevBtn, nextBtn);
  header.append(titleWrapper, nav);

  // Preferred order matching mockup: Cat Mail Co, ISLANDERS, Vacation Cafe, Winter Burrow, Shelve the Potions
  const preferredSlugs = [
    'cat-mail-co',
    'islanders-new-shores',
    'vacation-cafe-simulator',
    'winter-burrow',
    'shelve-the-potions',
  ];

  const orderedGames: GameData[] = [];
  const gamesMap = new Map(games.map((g) => [g.slug, g]));

  for (const slug of preferredSlugs) {
    const found = gamesMap.get(slug);
    if (found) {
      orderedGames.push(found);
      gamesMap.delete(slug);
    }
  }

  // Append remaining games if any
  for (const g of gamesMap.values()) {
    orderedGames.push(g);
  }

  const trackContainer = document.createElement('div');
  trackContainer.className = 'carousel-section__track-container';

  const track = document.createElement('div');
  track.className = 'carousel-section__track';

  const slideElements: HTMLElement[] = [];

  for (const game of orderedGames) {
    const slideWrapper = document.createElement('div');
    slideWrapper.className = 'carousel-section__slide';

    const card = createGameCard(game);
    slideWrapper.append(card);
    track.append(slideWrapper);
    slideElements.push(slideWrapper);
  }

  trackContainer.append(track);
  section.append(header, trackContainer);

  let currentIndex = 2; // Initial index 2 (Vacation Cafe Simulator)

  const updateCarousel = () => {
    const is3CardView = window.innerWidth <= 1024;
    const N = slideElements.length;

    for (const [index, slide] of slideElements.entries()) {
      slide.classList.remove(
        'carousel-section__slide--wide',
        'carousel-section__slide--standard',
        'carousel-section__slide--compact',
        'carousel-section__slide--hidden'
      );

      let distance = (index - currentIndex) % N;
      if (distance > N / 2) distance -= N;
      if (distance < -N / 2) distance += N;

      if (distance === 0) {
        slide.classList.add('carousel-section__slide--wide');
      } else if (Math.abs(distance) === 1) {
        slide.classList.add(
          is3CardView ? 'carousel-section__slide--compact' : 'carousel-section__slide--standard'
        );
      } else if (!is3CardView && Math.abs(distance) === 2) {
        slide.classList.add('carousel-section__slide--compact');
      } else {
        slide.classList.add('carousel-section__slide--hidden');
      }
    }
  };

  prevBtn.addEventListener('click', () => {
    const N = slideElements.length;
    currentIndex = (currentIndex - 1 + N) % N;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    const N = slideElements.length;
    currentIndex = (currentIndex + 1) % N;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  return section;
};
