let activeBackdrop: HTMLElement | undefined;

const ICONS = {
  email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  google: `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`
};

const handleEscPress = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    closeAuthDialog();
  }
};

const renderLoginForm = (): string => `
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.email}</span>
        <input type="email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${ICONS.eye}</button>
      </div>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn">Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${ICONS.google}</span> Continue with Google
    </button>
    <div class="auth-form__footer-text">
      Don't have an account? <button type="button" class="auth-form__switch-inline" data-target="register">Register</button>
    </div>
  </form>
`;

const renderRegisterForm = (): string => `
  <div class="auth-form__header">
    <h2 class="auth-form__title">Create Account</h2>
    <p class="auth-form__subtitle">Join MiniGames to track your score & streak.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.user}</span>
        <input type="text" class="auth-form__input" placeholder="e.g. CozyGamer_99" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.email}</span>
        <input type="email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Min. 8 characters" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
    </div>
    <button type="submit" class="auth-form__submit-btn">Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${ICONS.google}</span> Sign up with Google
    </button>
    <div class="auth-form__footer-text">
      Already have an account? <button type="button" class="auth-form__switch-inline" data-target="login">Login</button>
    </div>
  </form>
`;

export const createAuthDialog = (): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'auth-backdrop auth-backdrop--hidden';

  backdrop.innerHTML = `
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>
      
      <div class="auth-switcher">
        <div class="auth-switcher__pill"></div>
        <button type="button" class="auth-switcher__btn auth-switcher__btn--active" data-tab="login">Login</button>
        <button type="button" class="auth-switcher__btn" data-tab="register">Register</button>
      </div>

      <div class="auth-dialog__container">
        <div class="auth-dialog__view auth-dialog__view--active" id="auth-view-login">
          ${renderLoginForm()}
        </div>
        <div class="auth-dialog__view" id="auth-view-register">
          ${renderRegisterForm()}
        </div>
      </div>
    </div>
  `;

  const switchTab = (targetTab: 'login' | 'register'): void => {
    const tabs = backdrop.querySelectorAll<HTMLButtonElement>('.auth-switcher__btn');
    const pill = backdrop.querySelector<HTMLElement>('.auth-switcher__pill');
    const loginView = backdrop.querySelector<HTMLElement>('#auth-view-login');
    const registerView = backdrop.querySelector<HTMLElement>('#auth-view-register');

    if (!loginView || !registerView || !pill) return;

    if (targetTab === 'register') {
      pill.classList.add('auth-switcher__pill--register');
    } else {
      pill.classList.remove('auth-switcher__pill--register');
    }

    for (const tab of tabs) {
      if (tab.dataset.tab === targetTab) {
        tab.classList.add('auth-switcher__btn--active');
      } else {
        tab.classList.remove('auth-switcher__btn--active');
      }
    }

    const currentView = targetTab === 'login' ? registerView : loginView;
    const nextView = targetTab === 'login' ? loginView : registerView;

    if (nextView.classList.contains('auth-dialog__view--active')) return;

    currentView.classList.add('auth-dialog__view--fade-out');

    setTimeout(() => {
      currentView.classList.remove('auth-dialog__view--active', 'auth-dialog__view--fade-out');
      nextView.classList.add('auth-dialog__view--active', 'auth-dialog__view--fade-in');

      setTimeout(() => {
        nextView.classList.remove('auth-dialog__view--fade-in');
      }, 200);
    }, 150);
  };

  const switcherBtns = backdrop.querySelectorAll<HTMLButtonElement>('.auth-switcher__btn');
  for (const btn of switcherBtns) {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab as 'login' | 'register';
      if (target) switchTab(target);
    });
  }

  backdrop.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('auth-form__switch-inline')) {
      const tabTarget = target.dataset.target as 'login' | 'register';
      if (tabTarget) switchTab(tabTarget);
    }
  });

  const closeBtn = backdrop.querySelector('.auth-dialog__close');
  closeBtn?.addEventListener('click', closeAuthDialog);

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeAuthDialog();
    }
  });

  activeBackdrop = backdrop;
  return backdrop;
};

export const openAuthDialog = (initialTab: 'login' | 'register' = 'login'): void => {
  if (!activeBackdrop) return;

  activeBackdrop.classList.remove('auth-backdrop--hidden');
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', handleEscPress);

  const targetBtn = activeBackdrop.querySelector<HTMLButtonElement>(
    `.auth-switcher__btn[data-tab="${initialTab}"]`
  );
  targetBtn?.click();
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