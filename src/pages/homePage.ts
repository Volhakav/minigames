export const createHomePage = (): HTMLElement => {
  const container: HTMLElement = document.createElement('main');
  container.className = 'page-home';

  const title: HTMLHeadingElement = document.createElement('h1');
  title.textContent = 'Welcome to Mini-Games App';

  const description: HTMLParagraphElement = document.createElement('p');
  description.textContent =
    'Dynamic SPA application generated fully with TypeScript.';

  container.append(title, description);
  return container;
};