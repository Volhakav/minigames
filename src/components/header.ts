import logoIcon from '../assets/icons/logo-icon.webp';
import { openAuthDialog } from './auth-dialog';

export interface HeaderOptions {
  activePage?: 'home' | 'library';
  onNavigate?: (page: 'home' | 'library') => void;
}

export const createHeader = (options: HeaderOptions = {}): HTMLElement => {
  const { activePage = 'home', onNavigate } = options;

  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'header__container';

  // --- SPA Navigation Helper ---
  const handleNavigation = (event: Event, targetPage: 'home' | 'library'): void => {
    event.preventDefault();
    if (onNavigate) {
      onNavigate(targetPage);
    }
  };

  // --- Logo ---
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

  // --- Desktop Nav ---
  const nav = document.createElement('nav');
  nav.className = 'header__nav';

  const navList = document.createElement('ul');
  navList.className = 'header__nav-list';

  const navItems: Array<{ name: string; page: 'home' | 'library' }> = [
    { name: 'Home', page: 'home' },
    { name: 'Library', page: 'library' },
    { name: 'Tournaments', page: 'home' }, // Non-existent pages map to Home
    { name: 'Community', page: 'home' },   // Non-existent pages map to Home
  ];

  for (const item of navItems) {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const a = document.createElement('a');
    a.href = '#';
    
    // Check if this item corresponds to the current active page
    const isActive = (item.name.toLowerCase() === activePage);
    a.className = `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;
    a.textContent = item.name;

    a.addEventListener('click', (e) => handleNavigation(e, item.page));

    li.append(a);
    navList.append(li);
  }

  nav.append(navList);

  // --- Desktop Actions ---
  const actions = document.createElement('div');
  actions.className = 'header__actions';

  const logInBtn = document.createElement('button');
  logInBtn.type = 'button';
  logInBtn.className = 'header__btn header__btn--login';
  logInBtn.textContent = 'Log In';

  const signUpBtn = document.createElement('button');
  signUpBtn.type = 'button';
  signUpBtn.className = 'header__btn header__btn--signup';
  signUpBtn.textContent = 'Sign Up';

  actions.append(logInBtn, signUpBtn);

  // --- Burger Button ---
  const burgerBtn = document.createElement('button');
  burgerBtn.type = 'button';
  burgerBtn.className = 'header__burger';
  burgerBtn.setAttribute('aria-label', 'Open navigation menu');

  for (let index = 0; index < 3; index += 1) {
    const line = document.createElement('span');
    line.className = 'header__burger-line';
    burgerBtn.append(line);
  }

  // --- Right Controls ---
  const rightControls = document.createElement('div');
  rightControls.className = 'header__right-controls';
  rightControls.append(actions, burgerBtn);

  // --- Mobile Overlay ---
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

  // Build Mobile Nav List dynamically to attach click listeners properly
  const mobileNavList = document.createElement('ul');
  mobileNavList.className = 'header__nav-list';

  navItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const a = document.createElement('a');
    a.href = '#';
    const isActive = (item.name.toLowerCase() === activePage);
    a.className = `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;
    a.textContent = item.name;

    a.addEventListener('click', (e) => {
      closeMenu();
      handleNavigation(e, item.page);
    });

    li.append(a);
    mobileNavList.append(li);
  });

  const mobileActions = document.createElement('div');
  mobileActions.className = 'header__mobile-actions';

  const mobileLogInBtn = logInBtn.cloneNode(true) as HTMLButtonElement;
  const mobileSignUpBtn = signUpBtn.cloneNode(true) as HTMLButtonElement;

  mobileActions.append(mobileLogInBtn, mobileSignUpBtn);
  mobileOverlay.append(overlayTop, mobileNavList, mobileActions);

  // --- Handlers ---
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

  const handleAuthClick = (): void => {
    closeMenu();
    openAuthDialog();
  };

  logInBtn.addEventListener('click', handleAuthClick);
  mobileLogInBtn.addEventListener('click', handleAuthClick);

  signUpBtn.addEventListener('click', handleAuthClick);
  mobileSignUpBtn.addEventListener('click', handleAuthClick);

  container.append(logo, nav, rightControls);
  header.append(container, mobileOverlay);

  return header;
};