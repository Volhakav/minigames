import { createHeader } from '../components/header';
import { createLibraryControls } from '../components/library-controls';
import { createLibraryGamesSection } from '../components/library-games';
import { createFooter } from '../components/footer';
import { createAuthDialog } from '../components/auth-dialog';

const navigateTo = (page: 'home' | 'library'): void => {
  const basePath = import.meta.env.BASE_URL || '/';
  const targetPath = page === 'home' ? `${basePath}/` : `${basePath}/${page}`;
  window.history.pushState({}, '', targetPath);
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

  const libraryGames = createLibraryGamesSection();

  const libraryControls = createLibraryControls({
    onCategoryChange: (categoryValue) => {
      libraryGames.updateState({ category: categoryValue });
    },
    onSortChange: (sortValue) => {
      libraryGames.updateState({ sort: sortValue });
    },
  });

  main.append(libraryControls, libraryGames.element);

  const footer = createFooter({
    onNavigate: navigateTo,
  });

  const authDialog = createAuthDialog();

  container.append(header, main, footer, authDialog);

  return container;
};