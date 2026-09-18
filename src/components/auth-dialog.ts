let activeBackdrop: HTMLElement | undefined;

const handleEscPress = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    closeAuthDialog();
  }
};

export const createAuthDialog = (): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'auth-backdrop auth-backdrop--hidden';

  backdrop.innerHTML = `
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">
        <span class="auth-dialog__close-icon">✕</span>
      </button>
      <div class="auth-dialog__content">
        <h2 class="auth-dialog__title">Welcome to MiniGames</h2>
        <p class="auth-dialog__description">Sign in or create an account to continue.</p>
      </div>
    </div>
  `;

  // Zamknięcie przyciskiem X
  const closeBtn = backdrop.querySelector('.auth-dialog__close');
  closeBtn?.addEventListener('click', closeAuthDialog);

  // Zamknięcie kliknięciem w tło (backdrop)
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeAuthDialog();
    }
  });

  activeBackdrop = backdrop;
  return backdrop;
};

export const openAuthDialog = (): void => {
  if (!activeBackdrop) return;

  activeBackdrop.classList.remove('auth-backdrop--hidden');
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', handleEscPress);
};

export const closeAuthDialog = (): void => {
  if (!activeBackdrop || activeBackdrop.classList.contains('auth-backdrop--hidden')) return;

  activeBackdrop.classList.add('auth-backdrop--closing');

  setTimeout(() => {
    if (activeBackdrop) {
      activeBackdrop.classList.remove('auth-backdrop--closing');
      activeBackdrop.classList.add('auth-backdrop--hidden');
    }
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', handleEscPress);
  }, 250);
};