import logoIcon from '../assets/icons/logo-icon.webp';
import { openAuthDialog } from './auth-dialog';
import { getValidAppSession, clearAppSessionAndSignOut } from '../services/session';

export interface HeaderOptions {
  activePage?: 'home' | 'library';
  onNavigate?: (page: 'home' | 'library') => void;
}

const getInitials = (name: string): string => {
  const trimmed = name.trim();
  if (!trimmed) return 'U';

  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length === 0) return 'U';

  if (words.length === 1) {
    const match = words[0].match(/[\p{L}\p{N}]/u);
    return match ? match[0].toUpperCase() : 'U';
  }

  const firstMatch = words[0].match(/[\p{L}\p{N}]/u);
  const secondMatch = words[1].match(/[\p{L}\p{N}]/u);

  const initials = (firstMatch?.[0] || '') + (secondMatch?.[0] || '');
  return initials ? initials.toUpperCase() : 'U';
};

const getDisplayName = (session: { displayName?: string; email?: string }): string => {
  if (session.displayName && session.displayName.trim()) {
    return session.displayName.trim();
  }
  if (session.email && session.email.includes('@')) {
    return session.email.split('@')[0];
  }
  return 'Gamer';
};

export const createHeader = (options: HeaderOptions = {}): HTMLElement => {
  const { activePage = 'home', onNavigate } = options;

  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'header__container';

  const handleNavigation = (event: Event, targetPage: 'home' | 'library'): void => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate(targetPage);
    }
  };

  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = 'header__logo';
  logo.addEventListener('click', (e) => handleNavigation(e, 'home'));

  const logoImg = document.createElement('img');
  logoImg.src = logoIcon;
  logoImg.alt = 'MiniGames Logo';
  logoImg.className = 'header__logo-icon';

  const logoText = document.createElement('span');
  logoText.className = 'header__logo-text';
  logoText.textContent = 'MiniGames';

  logo.append(logoImg, logoText);

  const nav = document.createElement('nav');
  nav.className = 'header__nav';

  const navList = document.createElement('ul');
  navList.className = 'header__nav-list';

  const navItems: Array<{ name: string; page: 'home' | 'library' }> = [
    { name: 'Home', page: 'home' },
    { name: 'Library', page: 'library' },
    { name: 'Tournaments', page: 'home' },
    { name: 'Community', page: 'home' },
  ];

  for (const item of navItems) {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const a = document.createElement('a');
    a.href = '#';

    const isActive = item.name.toLowerCase() === activePage;
    a.className = `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;
    a.textContent = item.name;

    a.addEventListener('click', (e) => handleNavigation(e, item.page));

    li.append(a);
    navList.append(li);
  }

  nav.append(navList);

  // --- Render Actions ---
  const renderActionsContainer = (): { actions: HTMLElement; mobileActions: HTMLElement } => {
    const actions = document.createElement('div');
    actions.className = 'header__actions';

    const mobileActions = document.createElement('div');
    mobileActions.className = 'header__mobile-actions';

    const session = getValidAppSession();

    if (session) {
      const displayName = getDisplayName(session);
      const initials = getInitials(displayName);

      const createAuthenticatedGroup = (isMobile = false): HTMLElement => {
        const group = document.createElement('div');
        group.className = isMobile ? 'header__mobile-auth-group' : 'header__auth-group';

        const profileDiv = document.createElement('div');
        profileDiv.className = isMobile ? 'header__mobile-profile' : 'header__profile';

        // 1. Najpierw nazwa użytkownika (zgodnie z mockupem: "John Doe")
        const nameSpan = document.createElement('span');
        nameSpan.className = 'header__profile-name';
        nameSpan.textContent = displayName;

        // 2. Potem awatar / inicjały w kółku (zgodnie z mockupem: "JD")
        const avatarWrapper = document.createElement('div');
        avatarWrapper.className = 'header__avatar';

        if (session.avatarUrl) {
          const img = document.createElement('img');
          img.src = session.avatarUrl;
          img.alt = displayName;
          img.className = 'header__avatar-img';
          img.addEventListener('error', (): void => {
            img.style.display = 'none';
            initialsSpan.style.display = 'flex';
          });
          avatarWrapper.append(img);
        }

        const initialsSpan = document.createElement('span');
        initialsSpan.className = 'header__avatar-initials';
        initialsSpan.textContent = initials;
        if (session.avatarUrl) {
          initialsSpan.style.display = 'none';
        }
        avatarWrapper.append(initialsSpan);

        profileDiv.append(nameSpan, avatarWrapper);

        // 3. Przycisk Logout jako osobny element w grupie
        const logoutBtn = document.createElement('button');
        logoutBtn.type = 'button';
        logoutBtn.className = 'header__btn header__btn--logout';
        logoutBtn.textContent = 'Log Out';

        logoutBtn.addEventListener('click', () => {
          clearAppSessionAndSignOut();
          window.dispatchEvent(new CustomEvent('auth-state-changed'));
        });

        group.append(profileDiv, logoutBtn);
        return group;
      };

      actions.append(createAuthenticatedGroup(false));
      mobileActions.append(createAuthenticatedGroup(true));
    } else {
      const logInBtn = document.createElement('button');
      logInBtn.type = 'button';
      logInBtn.className = 'header__btn header__btn--login';
      logInBtn.textContent = 'Log In';

      const signUpBtn = document.createElement('button');
      signUpBtn.type = 'button';
      signUpBtn.className = 'header__btn header__btn--signup';
      signUpBtn.textContent = 'Sign Up';

      const handleAuthClick = (): void => {
        closeMenu();
        openAuthDialog();
      };

      logInBtn.addEventListener('click', handleAuthClick);
      signUpBtn.addEventListener('click', handleAuthClick);

      actions.append(logInBtn, signUpBtn);

      const mobileLogInBtn = logInBtn.cloneNode(true) as HTMLButtonElement;
      const mobileSignUpBtn = signUpBtn.cloneNode(true) as HTMLButtonElement;
      mobileLogInBtn.addEventListener('click', handleAuthClick);
      mobileSignUpBtn.addEventListener('click', handleAuthClick);

      mobileActions.append(mobileLogInBtn, mobileSignUpBtn);
    }

    return { actions, mobileActions };
  };

  let { actions, mobileActions } = renderActionsContainer();

  const burgerBtn = document.createElement('button');
  burgerBtn.type = 'button';
  burgerBtn.className = 'header__burger';
  burgerBtn.setAttribute('aria-label', 'Open navigation menu');

  for (let index = 0; index < 3; index += 1) {
    const line = document.createElement('span');
    line.className = 'header__burger-line';
    burgerBtn.append(line);
  }

  const rightControls = document.createElement('div');
  rightControls.className = 'header__right-controls';
  rightControls.append(actions, burgerBtn);

  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'header__mobile-overlay';

  const overlayTop = document.createElement('div');
  overlayTop.className = 'header__mobile-top';

  const mobileLogo = logo.cloneNode(true) as HTMLElement;
  mobileLogo.addEventListener('click', (e) => {
    closeMenu();
    handleNavigation(e, 'home');
  });

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'header__mobile-close';
  closeBtn.setAttribute('aria-label', 'Close menu');

  const closeIcon = document.createElement('span');
  closeIcon.className = 'header__mobile-close-icon';
  closeIcon.textContent = '✕';
  closeBtn.append(closeIcon);

  overlayTop.append(mobileLogo, closeBtn);

  const mobileNavList = document.createElement('ul');
  mobileNavList.className = 'header__nav-list';

  for (const item of navItems) {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const a = document.createElement('a');
    a.href = '#';
    const isActive = item.name.toLowerCase() === activePage;
    a.className = `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;
    a.textContent = item.name;

    a.addEventListener('click', (e) => {
      closeMenu();
      handleNavigation(e, item.page);
    });

    li.append(a);
    mobileNavList.append(li);
  }

  mobileOverlay.append(overlayTop, mobileNavList, mobileActions);

  const closeMenu = (): void => {
    mobileOverlay.classList.remove('header__mobile-overlay--active');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', handleEscClose);
  };

  const openMenu = (): void => {
    mobileOverlay.classList.add('header__mobile-overlay--active');
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', handleEscClose);
  };

  const handleEscClose = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') closeMenu();
  };

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  window.addEventListener('auth-state-changed', () => {
    const newRender = renderActionsContainer();
    actions.replaceWith(newRender.actions);
    actions = newRender.actions;

    mobileActions.replaceWith(newRender.mobileActions);
    mobileActions = newRender.mobileActions;
    
    const existingMobileActions = mobileOverlay.querySelector('.header__mobile-actions');
    if (existingMobileActions) {
      existingMobileActions.replaceWith(mobileActions);
    } else {
      mobileOverlay.append(mobileActions);
    }
  });

  container.append(logo, nav, rightControls);
  header.append(container, mobileOverlay);

  return header;
};