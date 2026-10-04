import { appRouter, basePath } from '../index';

export const createNotFoundPage = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'not-found-page';

  container.innerHTML = `
    <div class="not-found-page__container">
      <div class="not-found-page__badge">404</div>
      <h1 class="not-found-page__title">Page Not Found</h1>
      <p class="not-found-page__description">
        Oops! The page you are looking for doesn't exist, was removed, or the link is invalid.
      </p>
      <button type="button" class="not-found-page__btn" id="return-home-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to Home Page</span>
      </button>
    </div>
  `;

  const returnHomeBtn = container.querySelector('#return-home-btn');
  returnHomeBtn?.addEventListener('click', () => {
    appRouter.navigate(basePath || '/');
  });

  return container;
};