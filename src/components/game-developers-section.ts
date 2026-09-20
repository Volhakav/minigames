import illustrationSrc from '../assets/ilustration-side.webp';

export const createGameDevelopersSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'game-developers-section';

  const container = document.createElement('div');
  container.className = 'game-developers-section__container';

  // --- Left Side Illustration ---
  const illustrationWrapper = document.createElement('div');
  illustrationWrapper.className = 'game-developers-section__illustration-wrapper';

  const illustration = document.createElement('img');
  illustration.className = 'game-developers-section__illustration';
  illustration.src = illustrationSrc;
  illustration.alt = 'Game developer workspace illustration';

  illustrationWrapper.append(illustration);

  // --- Right Side Card Content ---
  const card = document.createElement('div');
  card.className = 'game-developers-section__card';

  const title = document.createElement('h2');
  title.className = 'game-developers-section__title';
  title.textContent = 'Are You a Game Developer?';

  const description = document.createElement('p');
  description.className = 'game-developers-section__description';
  description.textContent =
    "Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";

  // Submit Button
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'game-developers-section__button';

  const buttonIcon = document.createElement('span');
  buttonIcon.className = 'game-developers-section__button-icon';
  buttonIcon.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  `;

  const buttonText = document.createElement('span');
  buttonText.textContent = 'Submit Form';

  button.append(buttonIcon, buttonText);

  // Email note
  const contactNote = document.createElement('p');
  contactNote.className = 'game-developers-section__contact';
  contactNote.innerHTML = 'or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>';

  card.append(title, description, button, contactNote);
  container.append(illustrationWrapper, card);
  section.append(container);

  return section;
};