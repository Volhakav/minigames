export const createNotFoundPage = (): HTMLElement => {
  const container: HTMLElement = document.createElement('main');
  container.className = 'page-404';

  const title: HTMLHeadingElement = document.createElement('h1');
  title.textContent = '404 - Page Not Found';

  container.append(title);
  return container;
};
