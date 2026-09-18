export const createAuthDialog = (): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'auth-backdrop auth-backdrop--hidden';

  backdrop.innerHTML = `
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="auth-dialog__content">
        <h2 class="auth-dialog__title">Welcome to MiniGames</h2>
        <p class="auth-dialog__description">Sign in or create an account to continue.</p>
        <!-- Formularz logowania/rejestracji zostanie dodany w kolejnych zadaniach -->
      </div>
    </div>
  `;

  // Zamknięcie po kliknięciu w przycisk zamknięcia lub w tło (backdrop)
  const closeBtn = backdrop.querySelector('.auth-dialog__close');
  closeBtn?.addEventListener('click', () => closeAuthDialog());

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeAuthDialog();
    }
  });

  return backdrop;
};

export const openAuthDialog = (): void => {
  const backdrop = document.querySelector('.auth-backdrop');
  if (backdrop) {
    backdrop.classList.remove('auth-backdrop--hidden');
    document.body.style.overflow = 'hidden'; 
  }
};

export const closeAuthDialog = (): void => {
  const backdrop = document.querySelector('.auth-backdrop');
  if (backdrop) {
    backdrop.classList.add('auth-backdrop--hidden');
    document.body.style.removeProperty('overflow');
  }
};