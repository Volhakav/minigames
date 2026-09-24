import { createHeader } from '../components/header';
import { createHero } from '../components/hero';
import { createCarouselSection } from '../components/carousel-section';
import { createLeaderboardSection } from '../components/leaderboard-section';
import { createGameDevelopersSection } from '../components/game-developers-section';
import { createFooter } from '../components/footer';
import { createAuthDialog } from '../components/auth-dialog';
import gamesData from '../data/all-games-seed.json';
import leaderboardData from '../data/leaderboard-seed.json';

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const navigateTo = (page: 'home' | 'library') => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  const header = createHeader({
    activePage: 'home',
    onNavigate: navigateTo,
  });

  const main = document.createElement('main');

  const hero = createHero();
  const carousel = createCarouselSection(gamesData.data);
  const leaderboard = createLeaderboardSection(leaderboardData.data);
  const gameDevelopers = createGameDevelopersSection();

  const footer = createFooter({
    onNavigate: navigateTo,
  });
  const authDialog = createAuthDialog();

  main.append(hero, carousel, leaderboard, gameDevelopers);
  container.append(header, main, footer, authDialog);

  return container;
};