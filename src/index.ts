import './styles/main.scss';
import { Router } from './app/router';
import { createHomePage } from './pages/home-page';
import { createLibraryPage } from './pages/library-page';
import { createNotFoundPage } from './pages/not-found-page';
import { openGameDetailsDialog, closeGameDetailsDialogQuietly } from './components/game-details-dialog';

let currentGameModal: string | null = null;

const rawBase = import.meta.env.BASE_URL || '/';
const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

export const appRouter = new Router([
  { path: basePath || '/', render: createHomePage },
  { path: `${basePath}/`, render: createHomePage },
  { path: `${basePath}/library`, render: createLibraryPage },
  { path: `${basePath}/404`, render: createNotFoundPage },
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
      currentGameModal = null;
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
    const targetPath = page === 'home' ? `${basePath}/` : `${basePath}/${page}`;
    appRouter.navigate(targetPath);
  });

  appRouter.init(rootContainer);
};

appInit();