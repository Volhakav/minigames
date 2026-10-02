import { GameData, createGameCard } from './game-card';
import { openGameDetailsDialog } from './game-details-dialog';
import { fetchFeaturedGames } from '../services/api';
import { showSnackbar } from './snackbar';

export const createCarouselSection = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'carousel-section';

  const header = document.createElement('header');
  header.className = 'carousel-section__header';

  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'carousel-section__title-wrapper';

  const badge = document.createElement('span');
  badge.className = 'carousel-section__badge';

  const title = document.createElement('h2');
  title.className = 'carousel-section__title';
  title.textContent = 'Featured Games';

  titleWrapper.append(badge, title);

  const nav = document.createElement('nav');
  nav.className = 'carousel-section__nav';
  nav.setAttribute('aria-label', 'Carousel Navigation');

  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = 'carousel-section__btn carousel-section__btn--prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'carousel-section__btn carousel-section__btn--next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `;

  nav.append(prevBtn, nextBtn);
  header.append(titleWrapper, nav);

  const contentArea = document.createElement('div');
  contentArea.className = 'carousel-section__content';

  section.append(header, contentArea);

  let autoplayTimer: number | undefined;

  const renderSkeleton = () => {
    contentArea.innerHTML = `
      <div class="carousel-section__skeleton-container">
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
      </div>
    `;
  };

  const renderError = (message: string) => {
    contentArea.innerHTML = `
      <div class="carousel-section__error-banner">
        <p class="carousel-section__error-message">${message}</p>
        <button type="button" class="carousel-section__retry-btn">Try Again</button>
      </div>
    `;

    const retryBtn = contentArea.querySelector('.carousel-section__retry-btn');
    retryBtn?.addEventListener('click', () => {
      loadGames();
    });
  };

  const renderEmpty = () => {
    contentArea.innerHTML = `
      <div class="carousel-section__empty-state">
        <p>No featured games available right now.</p>
      </div>
    `;
  };

  const renderSlider = (sliderGames: GameData[]) => {
    contentArea.innerHTML = '';

    const trackContainer = document.createElement('div');
    trackContainer.className = 'carousel-section__track-container';

    const track = document.createElement('div');
    track.className = 'carousel-section__track';

    const slideElements: HTMLElement[] = [];
    let currentIndex = 0;
    let isPointerDown = false;
    let startX = 0;
    let isDragging = false;

    for (const game of sliderGames) {
      const slideWrapper = document.createElement('div');
      slideWrapper.className = 'carousel-section__slide';

      const card = createGameCard(game);
      slideWrapper.append(card);

      slideWrapper.addEventListener('click', (e) => {
        if (!isDragging) {
          e.preventDefault();
          openGameDetailsDialog();
        }
      });

      track.append(slideWrapper);
      slideElements.push(slideWrapper);
    }

    trackContainer.append(track);
    contentArea.append(trackContainer);

    const updateCarousel = () => {
      const is3CardView = window.innerWidth <= 1024;
      const N = slideElements.length;

      for (const [index, slide] of slideElements.entries()) {
        slide.classList.remove(
          'carousel-section__slide--wide',
          'carousel-section__slide--standard',
          'carousel-section__slide--compact',
          'carousel-section__slide--hidden'
        );

        let distance = (index - currentIndex) % N;
        if (distance > N / 2) distance -= N;
        if (distance < -N / 2) distance += N;

        slide.style.order = `${distance + Math.floor(N / 2)}`;

        if (distance === 0) {
          slide.classList.add('carousel-section__slide--wide');
        } else if (Math.abs(distance) === 1) {
          slide.classList.add(
            is3CardView ? 'carousel-section__slide--compact' : 'carousel-section__slide--standard'
          );
        } else if (!is3CardView && Math.abs(distance) === 2) {
          slide.classList.add('carousel-section__slide--compact');
        } else {
          slide.classList.add('carousel-section__slide--hidden');
        }
      }
    };

    const nextSlide = () => {
      const N = slideElements.length;
      currentIndex = (currentIndex + 1) % N;
      updateCarousel();
    };

    const prevSlide = () => {
      const N = slideElements.length;
      currentIndex = (currentIndex - 1 + N) % N;
      updateCarousel();
    };

    const stopAutoplay = () => {
      if (autoplayTimer !== undefined) {
        clearInterval(autoplayTimer);
        autoplayTimer = undefined;
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = window.setInterval(nextSlide, 4000);
    };

    const resetAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    prevBtn.onclick = () => {
      prevSlide();
      resetAutoplay();
    };

    nextBtn.onclick = () => {
      nextSlide();
      resetAutoplay();
    };

    trackContainer.addEventListener('pointerdown', (e: PointerEvent) => {
      isPointerDown = true;
      isDragging = false;
      startX = e.clientX;
      stopAutoplay();
    });

    trackContainer.addEventListener('pointermove', (e: PointerEvent) => {
      if (!isPointerDown) return;
      if (Math.abs(e.clientX - startX) > 5) {
        isDragging = true;
      }
    });

    const handlePointerUpOrCancel = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;

      const diff = e.clientX - startX;
      if (isDragging) {
        if (diff < -40) {
          nextSlide();
        } else {
          diff > 40 ? prevSlide() : updateCarousel();
        }
        resetAutoplay();
      } else {
        startAutoplay();
      }
    };

    trackContainer.addEventListener('pointerup', handlePointerUpOrCancel);
    trackContainer.addEventListener('pointercancel', handlePointerUpOrCancel);

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
    startAutoplay();
  };

  const loadGames = async () => {
    if (autoplayTimer !== undefined) {
      clearInterval(autoplayTimer);
      autoplayTimer = undefined;
    }

    renderSkeleton();

    try {
      const games = await fetchFeaturedGames();

      if (!games || games.length === 0) {
        renderEmpty();
        return;
      }

      renderSlider(games);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to fetch featured games.';
      renderError(errorMsg);
      showSnackbar(errorMsg, 'error');
    }
  };

  loadGames();

  return section;
};