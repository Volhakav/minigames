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

  const router: Router = new Router([
    { path: '/', render: createHomePage },
    { path: '/404', render: createNotFoundPage },
  ]);

  router.init(rootContainer);
};

appInit();