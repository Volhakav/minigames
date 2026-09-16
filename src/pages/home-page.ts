import { createHeader } from '../components/header';

export const createHomePage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'page-home';

  const header = createHeader();

  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = 'Welcome to Mini-Games App';
  main.append(title);

  container.append(header, main);
  return container;
};