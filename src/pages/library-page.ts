import { createHeader } from '../components/header';
import { createLibraryControls } from '../components/library-controls';
import { createLibraryGames } from '../components/library-games';
import { createLibraryPagination } from '../components/library-pagination';
import { createFooter } from '../components/footer';
import { createAuthDialog } from '../components/auth-dialog';
import gamesData from '../data/all-games-seed.json';

const navigateTo = (page: 'home' | 'library'): void => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
};

export const createLibraryPage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-library';

  const header = createHeader({
    activePage: 'library',
    onNavigate: navigateTo,
  });

  const main = document.createElement('main');
  main.className = 'page-library__main';

  const controls = createLibraryControls();
  const gamesGrid = createLibraryGames(gamesData.data);
  const pagination = createLibraryPagination();

  const footer = createFooter({
    onNavigate: navigateTo,
  });
  const authDialog = createAuthDialog();

  main.append(controls, gamesGrid, pagination);
  container.append(header, main, footer, authDialog);

  return container;
};
