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

  const basePath = import.meta.env.BASE_URL;

  const routes = {
    home: createHomePage,
    library: createLibraryPage,
  };

  const renderPage = (page: 'home' | 'library') => {
    rootContainer.innerHTML = '';
    rootContainer.append(routes[page]());
  };

  window.addEventListener('navigate', (e: Event) => {
    const customEvent = e as CustomEvent<'home' | 'library'>;
    renderPage(customEvent.detail);
  });

  const router: Router = new Router([
    { path: basePath, render: createHomePage },
    { path: `${basePath}library`, render: createLibraryPage },
    { path: `${basePath}404`, render: createNotFoundPage },
  ]);

  router.init(rootContainer);
};

appInit();