export const createGameDetailsDialog = (): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'game-dialog-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'game-dialog';

  dialog.innerHTML = `
    <button type="button" class="game-dialog__close" aria-label="Close dialog">✕</button>
    <div class="game-dialog__content">
      <div class="game-dialog__header">
        <h2 class="game-dialog__title">Tukoni: Forest Keepers</h2>
        <span class="game-dialog__category">Puzzle</span>
      </div>
      <p class="game-dialog__description">
        Play as Tukoni, the forest spirit, as you meet unique characters, solve captivating puzzles, craft new items, and explore a magical world filled with kindness.
      </p>
      <div class="game-dialog__actions">
        <button type="button" class="game-dialog__play-btn">Play Now</button>
        <button type="button" class="game-dialog__fav-btn" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  const closeBtn = dialog.querySelector('.game-dialog__close');
  const favBtn = dialog.querySelector('.game-dialog__fav-btn');

  const close = () => {
    backdrop.remove();
    document.body.classList.remove('no-scroll');
  };

  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  favBtn?.addEventListener('click', () => {
    favBtn.classList.toggle('game-dialog__fav-btn--active');
  });

  return backdrop;
};

export const openGameDetailsDialog = (): void => {
  const existingDialog = document.querySelector('.game-dialog-backdrop');
  if (existingDialog) existingDialog.remove();

  const dialogElement = createGameDetailsDialog();
  document.body.append(dialogElement);
  document.body.classList.add('no-scroll');
};