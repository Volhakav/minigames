import logoIcon from '../assets/icons/logo-icon.webp';

export const createHeader = (): HTMLElement => {
  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'header__container';

  // Logo
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

  // Navigation
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

  // Actions (Buttons)
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

  // Burger Menu Button with CSS-generated lines
  const burgerBtn = document.createElement('button');
  burgerBtn.type = 'button';
  burgerBtn.className = 'header__burger';
  burgerBtn.setAttribute('aria-label', 'Open navigation menu');

  for (let index = 0; index < 3; index += 1) {
    const line = document.createElement('span');
    line.className = 'header__burger-line';
    burgerBtn.append(line);
  }

  // Redirect logic
  logInBtn.addEventListener('click', () => {
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
  });

  signUpBtn.addEventListener('click', () => {
    window.history.pushState({}, '', '/register');
    window.dispatchEvent(new Event('popstate'));
  });

  actions.append(logInBtn, signUpBtn, burgerBtn);
  container.append(logo, nav, actions);
  header.append(container);

  return header;
};