export const createGameDetailsDialog = (): HTMLElement => {
  const backdrop = document.createElement('div');
  backdrop.className = 'game-dialog-backdrop';

  const dialog = document.createElement('div');
  dialog.className = 'game-dialog';

  dialog.innerHTML = `
    <div class="game-dialog__hero">
      <img 
        src="/images/games/tukoni-forest-keepers-card.jpg" 
        alt="Tukoni: Forest Keepers" 
        class="game-dialog__hero-img"
      />
      <button type="button" class="game-dialog__close" aria-label="Close dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="game-dialog__body">
      <div class="game-dialog__header">
        <h2 class="game-dialog__title">Tukoni: Forest Keepers</h2>
        <div class="game-dialog__stats">
          <div class="game-dialog__stat">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>4.9</span>
          </div>
          <div class="game-dialog__stat">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>31.2K</span>
          </div>
        </div>
      </div>

      <p class="game-dialog__description">
        Tukoni: Forest Keepers — a cozy hand-drawn puzzle-adventure. You are Traveller, a little forest spirit on an important mission. Wander storybook meadows, visit mushroom villages, meet adorable inhabitants, solve gentle hand-crafted puzzles, brew herbal teas and help the Tukoni forest prepare peacefully for the coming winter.
      </p>

      <div class="game-dialog__meta-grid">
        <div class="game-dialog__meta-item">
          <span class="game-dialog__meta-label">Genre</span>
          <span class="game-dialog__meta-value">Puzzle</span>
        </div>
        <div class="game-dialog__meta-item">
          <span class="game-dialog__meta-label">Players</span>
          <span class="game-dialog__meta-value">Solo</span>
        </div>
        <div class="game-dialog__meta-item">
          <span class="game-dialog__meta-label">Duration</span>
          <span class="game-dialog__meta-value">40-90 min</span>
        </div>
        <div class="game-dialog__meta-item">
          <span class="game-dialog__meta-label">Price</span>
          <span class="game-dialog__meta-value">Free</span>
        </div>
      </div>

      <div class="game-dialog__actions">
        <button type="button" class="game-dialog__play-btn">Play Now</button>
        <button type="button" class="game-dialog__fav-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>Add to Favorites</span>
        </button>
      </div>

      <div class="game-dialog__section">
        <h3 class="game-dialog__section-title">🏆 Top Records</h3>
        <div class="game-dialog__records-list">
          <div class="game-dialog__record-item">
            <span class="game-dialog__record-user">🥇 ForestSpirit</span>
            <span class="game-dialog__record-score">356,700 pts</span>
            <span class="game-dialog__record-date">2 days ago</span>
          </div>
          <div class="game-dialog__record-item">
            <span class="game-dialog__record-user">🥈 TeaBrewer</span>
            <span class="game-dialog__record-score">332,400 pts</span>
            <span class="game-dialog__record-date">5 days ago</span>
          </div>
          <div class="game-dialog__record-item">
            <span class="game-dialog__record-user">🥉 HerbalistPath</span>
            <span class="game-dialog__record-score">308,900 pts</span>
            <span class="game-dialog__record-date">1 week ago</span>
          </div>
        </div>
      </div>

      <div class="game-dialog__section">
        <h3 class="game-dialog__section-title">Comments (3)</h3>
        <div class="game-dialog__comment-input-row">
          <div class="game-dialog__avatar game-dialog__avatar--user">U</div>
          <input type="text" class="game-dialog__input" placeholder="Write a comment..." />
          <button type="button" class="game-dialog__send-btn" aria-label="Send comment">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        <div class="game-dialog__comments-list">
          <div class="game-dialog__comment">
            <div class="game-dialog__comment-header">
              <div class="game-dialog__comment-author">
                <div class="game-dialog__avatar">F</div>
                <span class="game-dialog__author-name">ForestDweller</span>
              </div>
              <span class="game-dialog__comment-time">3 hours ago</span>
            </div>
            <p class="game-dialog__comment-text">
              The hand-drawn art is absolutely magical 🍄 Every location feels like a page from a children's storybook. The mushroom village made me cry happy tears!
            </p>
            <button type="button" class="game-dialog__like-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>12</span>
            </button>
          </div>

          <div class="game-dialog__comment">
            <div class="game-dialog__comment-header">
              <div class="game-dialog__comment-author">
                <div class="game-dialog__avatar">H</div>
                <span class="game-dialog__author-name">HerbalTeaLover</span>
              </div>
              <span class="game-dialog__comment-time">1 day ago</span>
            </div>
            <p class="game-dialog__comment-text">
              Perfect cozy evening game — brew a cup of chamomile, wrap in a blanket and help the little Tukoni prepare for winter. The puzzles are gentle but satisfying.
            </p>
            <button type="button" class="game-dialog__like-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>5</span>
            </button>
          </div>

          <div class="game-dialog__comment">
            <div class="game-dialog__comment-header">
              <div class="game-dialog__comment-author">
                <div class="game-dialog__avatar">C</div>
                <span class="game-dialog__author-name">CottageCoreMia</span>
              </div>
              <span class="game-dialog__comment-time">3 days ago</span>
            </div>
            <p class="game-dialog__comment-text">
              I want to live inside this game forever 🌿 The NPCs are so charming, the tea recipes are real, and the atmosphere is pure warmth and calm.
            </p>
            <button type="button" class="game-dialog__like-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>8</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  backdrop.append(dialog);

  const closeBtn = dialog.querySelector('.game-dialog__close');
  const favBtn = dialog.querySelector('.game-dialog__fav-btn');
  const likeBtns = dialog.querySelectorAll('.game-dialog__like-btn');

  let isClosing = false;

  // Анимированное закрытие диалога
  const close = () => {
    if (isClosing) return;
    isClosing = true;

    backdrop.classList.add('game-dialog-backdrop--closing');
    document.body.classList.remove('no-scroll');

    // Удаляем слушатель Esc
    document.removeEventListener('keydown', handleKeyDown);

    // Ждем окончания анимации (250ms)
    setTimeout(() => {
      backdrop.remove();
    }, 250);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', handleKeyDown);

  favBtn?.addEventListener('click', () => {
    favBtn.classList.toggle('game-dialog__fav-btn--active');
  });

  likeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('game-dialog__like-btn--active');
    });
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