import './styles/main.scss';
import { Router } from './app/router';
import { createHomePage } from './pages/home-page';
import { createLibraryPage } from './pages/library-page';
import { createNotFoundPage } from './pages/not-found-page';
import { openGameDetailsDialog, closeGameDetailsDialogQuietly } from './components/game-details-dialog';

let currentGameModal: string | undefined;

const rawBase = import.meta.env.BASE_URL || '/';
export const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

const createHeader = (): HTMLElement => {
  const header = document.createElement('header');
  header.className = 'main-header-wrapper';
  return header;
};

const createFooter = (): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = 'main-footer';
  footer.innerHTML = `
    <div class="main-footer__container">
      <p>&copy; ${new Date().getFullYear()} MiniGames SPA. All rights reserved.</p>
    </div>
  `;
  return footer;
};

export const appRouter = new Router([
  {
    path: basePath || '/',
    render: () => {
      const pageWrapper = document.createElement('div');
      pageWrapper.append(createHeader(), createHomePage(), createFooter());
      return pageWrapper;
    },
  },
  {
    path: `${basePath}/library`,
    render: () => {
      const pageWrapper = document.createElement('div');
      pageWrapper.append(createHeader(), createLibraryPage(), createFooter());
      return pageWrapper;
    },
  },
  {
    path: `${basePath}/404`,
    render: () => {
      const pageWrapper = document.createElement('div');
      pageWrapper.append(createHeader(), createNotFoundPage(), createFooter());
      return pageWrapper;
    },
  },
]);

appRouter.onRouteChange((queryParams) => {
  const activeGame = queryParams.game;
  if (activeGame) {
    if (currentGameModal !== activeGame) {
      currentGameModal = activeGame;
      openGameDetailsDialog(activeGame, false);
    }
  } else {
    if (currentGameModal) {
      currentGameModal = undefined;
      closeGameDetailsDialogQuietly();
    }
  }
});

const appInit = (): void => {
  let rootContainer = document.querySelector('#app') as HTMLDivElement;

  if (!rootContainer) {
    rootContainer = document.createElement('div');
    rootContainer.id = 'app';
    document.body.append(rootContainer);
  }

  window.addEventListener('navigate', (e: Event) => {
    const customEvent = e as CustomEvent<'home' | 'library'>;
    const page = customEvent.detail;
    const targetPath = page === 'home' ? `${basePath || '/'}` : `${basePath}/${page}`;
    appRouter.navigate(targetPath);
  });

  appRouter.init(rootContainer);
};

appInit();