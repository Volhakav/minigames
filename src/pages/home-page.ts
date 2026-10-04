import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createCarouselSection } from '../components/carousel-section';
import { createLeaderboardSection } from '../components/leaderboard-section';
import { createGameDevelopersSection } from '../components/game-developers-section';
import { createFooter } from '../components/footer';
import { createAuthDialog } from '../components/auth-dialog';

const navigateTo = (page: 'home' | 'library'): void => {
  const basePath = import.meta.env.BASE_URL || '/';
  const targetPath = page === 'home' ? basePath : `${basePath}library`;
  window.location.hash = targetPath;
  window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
};

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const header = createHeader({
    activePage: 'home',
    onNavigate: navigateTo,
  });

  const main = document.createElement('main');

  const hero = createHero();
  const carousel = createCarouselSection();
  const leaderboard = createLeaderboardSection();
  const gameDevelopers = createGameDevelopersSection();

  main.append(hero, carousel, leaderboard, gameDevelopers);

  const footer = createFooter({
    onNavigate: navigateTo,
  });
  const authDialog = createAuthDialog();

  container.append(header, main, footer, authDialog);

  return container;
};