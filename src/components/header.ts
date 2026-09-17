import logoIcon from '../assets/icons/logo-icon.webp';

export const createHeader = (): HTMLElement => {
  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'header__container';

  // --- Logo ---
  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = 'header__logo';

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

  const navItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Library', href: '/' },
    { name: 'Tournaments', href: '/' },
    { name: 'Community', href: '/' },
  ];

  for (const item of navItems) {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const a = document.createElement('a');
    a.href = item.href;
    a.className = `header__nav-link${item.active ? ' header__nav-link--active' : ''}`;
    a.textContent = item.name;

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

  // ОБЕРТКА ДЛЯ ПРАВОГО БЛОКА КНОПОК И БУРГЕРА
  const rightControls = document.createElement('div');
  rightControls.className = 'header__right-controls';
  rightControls.append(actions, burgerBtn);

  // --- Mobile Overlay ---
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'header__mobile-overlay';

  const overlayTop = document.createElement('div');
  overlayTop.className = 'header__mobile-top';

  const mobileLogo = logo.cloneNode(true) as HTMLElement;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'header__mobile-close';
  closeBtn.setAttribute('aria-label', 'Close menu');

  const closeIcon = document.createElement('span');
  closeIcon.className = 'header__mobile-close-icon';
  closeIcon.textContent = '✕';
  closeBtn.append(closeIcon);

  overlayTop.append(mobileLogo, closeBtn);

  const mobileNavList = navList.cloneNode(true) as HTMLElement;

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

  const mobileNavLinks = mobileNavList.querySelectorAll('.header__nav-link');
  for (const link of mobileNavLinks) {
    link.addEventListener('click', closeMenu);
  }

  const handleLoginClick = (): void => {
    closeMenu();
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
  };

  const handleSignUpClick = (): void => {
    closeMenu();
    window.history.pushState({}, '', '/register');
    window.dispatchEvent(new Event('popstate'));
  };

  logInBtn.addEventListener('click', handleLoginClick);
  mobileLogInBtn.addEventListener('click', handleLoginClick);

  signUpBtn.addEventListener('click', handleSignUpClick);
  mobileSignUpBtn.addEventListener('click', handleSignUpClick);

  container.append(logo, nav, rightControls);
  header.append(container, mobileOverlay);

  return header;
};