import logoSrc from '../assets/icons/logo-icon.webp';

export interface FooterOptions {
  onNavigate?: (page: 'home' | 'library') => void;
}

export const createFooter = (options: FooterOptions = {}): HTMLElement => {
  const { onNavigate } = options;

  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer__container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img class="footer__logo-img" src="${logoSrc}" alt="MiniGames Logo" />
            <span class="footer__logo-text">MiniGames</span>
          </div>
          <p class="footer__description">
            Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.
          </p>
        </div>

        <!-- Navigation Grid -->
        <div class="footer__nav-grid">
          <div class="footer__column">
            <h3 class="footer__title">Explore</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link" data-page="home">Home</a></li>
              <li><a href="#" class="footer__link" data-page="library">Library</a></li>
              <li><a href="#" class="footer__link" data-page="home">Categories</a></li>
              <li><a href="#" class="footer__link" data-page="home">Tournaments</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">Company</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link" data-page="home">About Us</a></li>
              <li><a href="#" class="footer__link" data-page="home">Contact</a></li>
              <li><a href="#" class="footer__link" data-page="home">Privacy Policy</a></li>
              <li><a href="#" class="footer__link" data-page="home">Terms of Service</a></li>
            </ul>
          </div>

          <div class="footer__column footer__column--community">
            <h3 class="footer__title">Community</h3>
            <div class="footer__socials">
              <a href="#" class="footer__social-btn" aria-label="Share" data-page="home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="Chat" data-page="home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <line x1="8" y1="9" x2="16" y2="9"></line>
                  <line x1="8" y1="13" x2="14" y2="13"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="RSS" data-page="home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__divider"></div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <span class="footer__copyright">© 2026 MiniGames. All rights reserved.</span>
        
        <div class="footer__credits">
          <a href="https://rs.school/courses/short-track" target="_blank" rel="noopener noreferrer" class="footer__credit-link">
            <span class="footer__badge footer__badge--rs">RS</span>
            <span>RS School</span>
          </a>

          <a href="https://github.com/Volhakav" target="_blank" rel="noopener noreferrer" class="footer__credit-link">
            <span class="footer__badge footer__badge--github">&lt;&gt;</span>
            <span>@Volhakav</span>
          </a>
        </div>

        <span class="footer__tagline">Designed with love</span>
      </div>
    </div>
  `;

  // --- SPA Event Listeners ---
  const links = footer.querySelectorAll<HTMLAnchorElement>('[data-page]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetPage = (link.dataset.page as 'home' | 'library') || 'home';
      if (onNavigate) {
        onNavigate(targetPage);
      }
    });
  });

  return footer;
};