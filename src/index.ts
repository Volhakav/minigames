import './styles/main.scss';
import { Router } from './app/router';
import { createHomePage } from './pages/home-page';
import { createNotFoundPage } from './pages/not-found-page';

const appInit = (): void => {
  const rootContainer: HTMLDivElement = document.createElement('div');
  rootContainer.id = 'app';
  document.body.append(rootContainer);

  const router: Router = new Router([
    { path: '/', render: createHomePage },
    { path: '/404', render: createNotFoundPage },
  ]);

  router.init(rootContainer);
};

document.addEventListener('DOMContentLoaded', appInit);
