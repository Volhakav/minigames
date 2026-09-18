import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createCarouselSection } from '../components/carousel-section';
import { createLeaderboardSection } from '../components/leaderboard-section';
import gamesData from '../data/all-games-seed.json';
import leaderboardData from '../data/leaderboard-seed.json';

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const header = createHeader();
  const main = document.createElement('main');

  const hero = createHero();
  const carousel = createCarouselSection(gamesData.data);
  const leaderboard = createLeaderboardSection(leaderboardData.data);

  main.append(hero, carousel, leaderboard);
  container.append(header, main);

  return container;
};
