export const createHero = (): HTMLElement => {
  const hero = document.createElement('section');
  hero.className = 'hero';

  const bgImage = document.createElement('img');
  bgImage.src = '/images/hero-bg.webp';
  bgImage.alt = '';
  bgImage.className = 'hero__bg';

  const container = document.createElement('div');
  container.className = 'hero__container';

  const card = document.createElement('div');
  card.className = 'hero__card';

  const title = document.createElement('h1');
  title.className = 'hero__title';
  title.textContent = 'Take a Short Break & Have Fun';

  const description = document.createElement('p');
  description.className = 'hero__description';
  description.textContent =
    'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'hero__btn';
  button.textContent = 'Browse Library';

  card.append(title, description, button);
  container.append(card);
  hero.append(bgImage, container);

  return hero;
};
