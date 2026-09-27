import './styles/main.scss';
import { Router } from './app/router';
import { createHomePage } from './pages/home-page';
import { createLibraryPage } from './pages/library-page';
import { createNotFoundPage } from './pages/not-found-page';

const appInit = (): void => {
  let rootContainer = document.querySelector('#app') as HTMLDivElement;

  if (!rootContainer) {
    rootContainer = document.createElement('div');
    rootContainer.id = 'app';
    document.body.append(rootContainer);
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  const router: Router = new Router([
    { path: basePath || '/', render: createHomePage },
    { path: `${basePath}/`, render: createHomePage },
    { path: `${basePath}/library`, render: createLibraryPage },
    { path: `${basePath}/404`, render: createNotFoundPage },
  ]);

  window.addEventListener('navigate', (e: Event) => {
    const customEvent = e as CustomEvent<'home' | 'library'>;
    const page = customEvent.detail;
    const targetPath = page === 'home' ? `${basePath}/` : `${basePath}/${page}`;
    window.history.pushState({}, '', targetPath);
    router.init(rootContainer);
  });

  router.init(rootContainer);
};

appInit();