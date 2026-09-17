import { createHeader } from '../components/header';
import { createHero } from '../components/hero'; 

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const header = createHeader();

  const main = document.createElement('main');
  
  const hero = createHero();
  main.append(hero);

  container.append(header, main);
  return container;
};