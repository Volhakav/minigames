import { createHeader } from '../components/header';
import { createLibraryControls } from '../components/library-controls';
import { createLibraryGamesSection } from '../components/library-games';
import { createLibraryPagination } from '../components/library-pagination';
import { createFooter } from '../components/footer';
import { createAuthDialog } from '../components/auth-dialog';

export const createLibraryPage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-library';

  const navigateTo = (page: 'home' | 'library') => {
    const basePath = import.meta.env.BASE_URL;
    const targetPath = page === 'home' ? basePath : `${basePath}library`;
    window.location.hash = targetPath;
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  const header = createHeader({
    activePage: 'library',
    onNavigate: navigateTo,
  });

  const main = document.createElement('main');
  const libraryControls = createLibraryControls();
  const libraryGames = createLibraryGamesSection();
  const libraryPagination = createLibraryPagination({ totalPages: 5, initialPage: 1 });

  main.append(libraryControls, libraryGames, libraryPagination);

  const footer = createFooter({
    onNavigate: navigateTo,
  });
  const authDialog = createAuthDialog();

  container.append(header, main, footer, authDialog);

  return container;
};