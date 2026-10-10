import { FirebaseError } from 'firebase/app';
import { loginAndCreateSession, registerAndCreateSession, loginWithGoogleAndCreateSession } from '../services/auth';
import { getValidAppSession } from '../services/session';

let activeBackdrop: HTMLElement | undefined;
let isPending = false;

const ICONS = {
  email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  google: `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
const USERNAME_CHARS_PATTERN = /^[A-Za-z0-9]+/;

const matchesFully = (pattern: RegExp, value: string): boolean => {
  const match = value.match(pattern);
  return match !== null && match[0] === value;
};

const cleanAuthQueryParam = (): void => {
  const url = new URL(window.location.href);
  if (url.searchParams.has('auth')) {
    url.searchParams.delete('auth');
    window.history.replaceState({}, '', url.toString());
  }
};

const showSnackbar = (message: string, type: 'warning' | 'info' | 'success' | 'error'): void => {
  window.dispatchEvent(
    new CustomEvent('show-snackbar', {
      detail: { message, type },
    })
  );
};

const handleEscPress = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && !isPending) {
    closeAuthDialog();
  }
};

const setDialogPendingState = (backdrop: HTMLElement, pending: boolean): void => {
  isPending = pending;
  const elements = backdrop.querySelectorAll<HTMLInputElement | HTMLButtonElement>('input, button');
  const closeBtn = backdrop.querySelector<HTMLButtonElement>('.auth-dialog__close');

  for (const el of elements) {
    el.disabled = pending;
  }
  if (closeBtn) {
    closeBtn.style.pointerEvents = pending ? 'none' : 'auto';
    closeBtn.style.opacity = pending ? '0.4' : '1';
  }
};

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/popup-closed-by-user':
      case 'auth/cancelled-popup-request':
        return 'Google sign-in was canceled.';
      case 'auth/popup-blocked':
        return 'The popup was blocked by your browser. Please allow popups and try again.';
      case 'auth/operation-not-allowed':
        return 'This sign-in method is not enabled for the project.';
      case 'auth/unauthorized-domain':
        return 'This domain is not authorized for sign-in.';
      case 'auth/email-already-in-use':
        return 'This email is already registered.';
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Invalid email or password.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return fallback;
    }
  }
  return error instanceof Error && error.message ? error.message : fallback;
};

const validateEmail = (email: string): string => {
  if (!email.trim()) return 'Email is required.';
  if (!matchesFully(EMAIL_PATTERN, email)) return 'Please enter a valid email address.';
  return '';
};

const validateUsername = (username: string): string => {
  if (!username.trim()) return 'Username is required.';
  if (username.length < 2 || username.length > 30) return 'Username must be between 2 and 30 characters.';
  if (!/^[A-Z]/.test(username)) return 'Username must start with an uppercase letter.';
  if (!matchesFully(USERNAME_CHARS_PATTERN, username)) {
    return 'Username can only contain English letters and digits (no spaces).';
  }
  return '';
};

const validateRegisterPassword = (password: string): string => {
  if (!password) return 'Password is required.';
  if (password.length < 6) return 'Password must be at least 6 characters long.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
  if (!/\d/.test(password)) return 'Password must contain at least one digit.';
  if (!/[^A-Za-z0-9]/.test(password)) return 'Password must contain at least one special character.';
  return '';
};

const validateLoginPassword = (password: string): string => {
  if (!password) return 'Password is required.';
  if (password.length < 6) return 'Password must be at least 6 characters long.';
  return '';
};

const validateConfirmPassword = (confirm: string, password: string): string => {
  if (!confirm) return 'Please confirm your password.';
  if (confirm !== password) return 'Passwords do not match.';
  return '';
};

const renderLoginForm = (): string => `
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" id="login-form" onsubmit="return false;" novalidate>
    <div class="auth-form__field">
      <label class="auth-form__label" for="login-email">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.email}</span>
        <input type="email" id="login-email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
      <span class="auth-form__error-msg" id="error-login-email"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="login-password">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" id="login-password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${ICONS.eye}</button>
      </div>
      <span class="auth-form__error-msg" id="error-login-password"></span>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn" id="login-submit-btn" disabled>Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn" id="login-google-btn">
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
  <form class="auth-form__body" id="register-form" onsubmit="return false;" novalidate>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-username">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.user}</span>
        <input type="text" id="register-username" class="auth-form__input" placeholder="e.g. CozyGamer99" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-username"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-email">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.email}</span>
        <input type="email" id="register-email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-email"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-password">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" id="register-password" class="auth-form__input" placeholder="Min. 6 chars, A-Z, 0-9, symbol" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-password"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-confirm-password">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ICONS.lock}</span>
        <input type="password" id="register-confirm-password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-confirm-password"></span>
    </div>
    <button type="submit" class="auth-form__submit-btn" id="register-submit-btn" disabled>Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn" id="register-google-btn">
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

  const loginForm = backdrop.querySelector<HTMLFormElement>('#login-form');
  const registerForm = backdrop.querySelector<HTMLFormElement>('#register-form');

  const loginEmailInput = backdrop.querySelector<HTMLInputElement>('#login-email');
  const loginPasswordInput = backdrop.querySelector<HTMLInputElement>('#login-password');
  const loginSubmitBtn = backdrop.querySelector<HTMLButtonElement>('#login-submit-btn');

  const registerUsernameInput = backdrop.querySelector<HTMLInputElement>('#register-username');
  const registerEmailInput = backdrop.querySelector<HTMLInputElement>('#register-email');
  const registerPasswordInput = backdrop.querySelector<HTMLInputElement>('#register-password');
  const registerConfirmInput = backdrop.querySelector<HTMLInputElement>('#register-confirm-password');
  const registerSubmitBtn = backdrop.querySelector<HTMLButtonElement>('#register-submit-btn');

  const isRegisterViewActive = (): boolean =>
    Boolean(backdrop.querySelector('#auth-view-register')?.classList.contains('auth-dialog__view--active'));

  const checkLoginValidity = (): void => {
    if (!loginEmailInput || !loginPasswordInput || !loginSubmitBtn) return;
    const emailErr = validateEmail(loginEmailInput.value);
    const passErr = validateLoginPassword(loginPasswordInput.value);
    loginSubmitBtn.disabled = Boolean(emailErr || passErr);
  };

  const checkRegisterValidity = (): void => {
    if (
      !registerUsernameInput ||
      !registerEmailInput ||
      !registerPasswordInput ||
      !registerConfirmInput ||
      !registerSubmitBtn
    ) {
      return;
    }
    const userErr = validateUsername(registerUsernameInput.value);
    const emailErr = validateEmail(registerEmailInput.value);
    const passErr = validateRegisterPassword(registerPasswordInput.value);
    const confirmErr = validateConfirmPassword(registerConfirmInput.value, registerPasswordInput.value);

    registerSubmitBtn.disabled = Boolean(userErr || emailErr || passErr || confirmErr);
  };

  const finishPending = (): void => {
    setDialogPendingState(backdrop, false);
    checkLoginValidity();
    checkRegisterValidity();
  };

  const setupValidationListeners = (): void => {
    if (loginEmailInput && loginPasswordInput) {
      const handleLoginInput = (e: Event): void => {
        const target = e.target as HTMLInputElement;
        const isEmail = target === loginEmailInput;
        const errSpan = backdrop.querySelector(`#error-login-${isEmail ? 'email' : 'password'}`);
        if (errSpan) {
          errSpan.textContent = isEmail ? validateEmail(target.value) : validateLoginPassword(target.value);
        }
        checkLoginValidity();
      };
      for (const input of [loginEmailInput, loginPasswordInput]) {
        input.addEventListener('input', handleLoginInput);
        input.addEventListener('blur', handleLoginInput);
      }
    }

    if (registerUsernameInput && registerEmailInput && registerPasswordInput && registerConfirmInput) {
      const handleRegisterInput = (e: Event): void => {
        const target = e.target as HTMLInputElement;
        let err = '';
        let fieldName = '';

        if (target === registerUsernameInput) {
          err = validateUsername(target.value);
          fieldName = 'username';
        } else if (target === registerEmailInput) {
          err = validateEmail(target.value);
          fieldName = 'email';
        } else if (target === registerPasswordInput) {
          err = validateRegisterPassword(target.value);
          fieldName = 'password';
          const confirmErrSpan = backdrop.querySelector('#error-register-confirm-password');
          if (confirmErrSpan && registerConfirmInput.value) {
            confirmErrSpan.textContent = validateConfirmPassword(registerConfirmInput.value, target.value);
          }
        } else {
          err = validateConfirmPassword(target.value, registerPasswordInput.value);
          fieldName = 'confirm-password';
        }

        const errSpan = backdrop.querySelector(`#error-register-${fieldName}`);
        if (errSpan) errSpan.textContent = err;

        checkRegisterValidity();
      };

      const inputs = [registerUsernameInput, registerEmailInput, registerPasswordInput, registerConfirmInput];
      for (const input of inputs) {
        input.addEventListener('input', handleRegisterInput);
        input.addEventListener('blur', handleRegisterInput);
      }
    }
  };

  setupValidationListeners();

  loginForm?.addEventListener('submit', async () => {
    if (isPending || !loginEmailInput || !loginPasswordInput) return;
    setDialogPendingState(backdrop, true);

    try {
      await loginAndCreateSession(loginEmailInput.value, loginPasswordInput.value);
      finishPending();
      closeAuthDialog();
      window.dispatchEvent(new CustomEvent('auth-state-changed'));
    } catch (error) {
      finishPending();
      const errSpan = backdrop.querySelector('#error-login-password');
      if (errSpan) {
        errSpan.textContent = getErrorMessage(error, 'Login failed. Please check credentials.');
      }
    }
  });

  registerForm?.addEventListener('submit', async () => {
    if (isPending || !registerUsernameInput || !registerEmailInput || !registerPasswordInput) return;
    setDialogPendingState(backdrop, true);

    try {
      await registerAndCreateSession(
        registerEmailInput.value,
        registerPasswordInput.value,
        registerUsernameInput.value
      );
      finishPending();
      closeAuthDialog();
      window.dispatchEvent(new CustomEvent('auth-state-changed'));
    } catch (error) {
      finishPending();
      const errSpan = backdrop.querySelector('#error-register-password');
      if (errSpan) {
        errSpan.textContent = getErrorMessage(error, 'Registration failed. Please try again.');
      }
    }
  });

  const handleGoogleAuth = async (): Promise<void> => {
    if (isPending) return;
    setDialogPendingState(backdrop, true);

    try {
      await loginWithGoogleAndCreateSession();
      finishPending();
      closeAuthDialog();
      window.dispatchEvent(new CustomEvent('auth-state-changed'));
    } catch (error) {
      finishPending();

      const errSpan = backdrop.querySelector(
        isRegisterViewActive() ? '#error-register-password' : '#error-login-password'
      );
      if (errSpan) {
        errSpan.textContent = getErrorMessage(error, 'Google sign-in failed. Please try again.');
      }
    }
  };

  const googleBtns = backdrop.querySelectorAll<HTMLButtonElement>('.auth-form__google-btn');
  for (const btn of googleBtns) {
    btn.addEventListener('click', handleGoogleAuth);
  }

  const resetForms = (): void => {
    loginForm?.reset();
    registerForm?.reset();
    const errorSpans = backdrop.querySelectorAll('.auth-form__error-msg');
    for (const span of errorSpans) {
      span.textContent = '';
    }
    if (loginSubmitBtn) loginSubmitBtn.disabled = true;
    if (registerSubmitBtn) registerSubmitBtn.disabled = true;
  };

  const switchTab = (targetTab: 'login' | 'register'): void => {
    if (isPending) return;
    resetForms();
    const tabs = backdrop.querySelectorAll<HTMLButtonElement>('.auth-switcher__btn');
    const pill = backdrop.querySelector<HTMLElement>('.auth-switcher__pill');
    const loginView = backdrop.querySelector<HTMLElement>('#auth-view-login');
    const registerView = backdrop.querySelector<HTMLElement>('#auth-view-register');

    if (!loginView || !registerView || !pill) return;

    pill.classList.toggle('auth-switcher__pill--register', targetTab === 'register');

    for (const tab of tabs) {
      tab.classList.toggle('auth-switcher__btn--active', tab.dataset.tab === targetTab);
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
      const target = btn.dataset.tab as 'login' | 'register' | undefined;
      if (target) switchTab(target);
    });
  }

  backdrop.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target === backdrop) {
      if (!isPending) closeAuthDialog();
      return;
    }

    if (target.classList.contains('auth-form__switch-inline')) {
      const tabTarget = target.dataset.target as 'login' | 'register' | undefined;
      if (tabTarget && !isPending) switchTab(tabTarget);
      return;
    }

    const eyeBtn = target.closest<HTMLButtonElement>('.auth-form__eye-btn');
    if (eyeBtn) {
      const input = eyeBtn.parentElement?.querySelector<HTMLInputElement>('input');
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
    }
  });

  const closeBtn = backdrop.querySelector('.auth-dialog__close');
  closeBtn?.addEventListener('click', () => {
    if (!isPending) closeAuthDialog();
  });

  activeBackdrop = backdrop;
  return backdrop;
};

export const openAuthDialog = (initialTab: 'login' | 'register' = 'login'): void => {
  if (!activeBackdrop) return;

  if (getValidAppSession()) {
    cleanAuthQueryParam();
    showSnackbar('You are already authenticated.', 'warning');
    return;
  }

  activeBackdrop.classList.remove('auth-backdrop--hidden');
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', handleEscPress);

  const targetBtn = activeBackdrop.querySelector<HTMLButtonElement>(
    `.auth-switcher__btn[data-tab="${initialTab}"]`
  );
  targetBtn?.click();
};

export const closeAuthDialog = (): void => {
  if (isPending || !activeBackdrop || activeBackdrop.classList.contains('auth-backdrop--hidden')) return;

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