import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createCarouselSection } from '../components/carousel-section';
import gamesData from '../data/all-games-seed.json';

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const header = createHeader();
  const main = document.createElement('main');

  const hero = createHero();
  const carousel = createCarouselSection(gamesData.data);

  main.append(hero, carousel);
  container.append(header, main);

  return container;
};
