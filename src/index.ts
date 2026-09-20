import './styles/main.scss';
import { Router } from './app/router';
import { createHomePage } from './pages/home-page';
import { createNotFoundPage } from './pages/not-found-page';

const appInit = (): void => {
  let rootContainer = document.querySelector('#app') as HTMLDivElement;

  if (!rootContainer) {
    rootContainer = document.createElement('div');
    rootContainer.id = 'app';
    document.body.append(rootContainer);
  }

  const basePath = import.meta.env.BASE_URL;

  const router: Router = new Router([
    { path: basePath, render: createHomePage },
    { path: `${basePath}404`, render: createNotFoundPage },
  ]);

  router.init(rootContainer);
};

appInit();