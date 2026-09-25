export interface PaginationOptions {
  totalPages?: number;
  initialPage?: number;
}

export const createLibraryPagination = (options: PaginationOptions = {}): HTMLElement => {
  const totalPages = options.totalPages || 5;
  let currentPage = options.initialPage || 1;

  const section = document.createElement('section');
  section.className = 'library-pagination';

  const container = document.createElement('div');
  container.className = 'library-pagination__container';

  const isMobile = (): boolean => window.matchMedia('(max-width: 640px)').matches;

  const getVisiblePages = (): number[] => {
    const limit = isMobile() ? 3 : 4;
    const pages: number[] = [];

    let start = Math.max(1, currentPage - Math.floor(limit / 2));
    let end = start + limit - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - limit + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const renderPagination = (): void => {
    container.innerHTML = '';

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'library-pagination__arrow library-pagination__arrow--prev';
    prevBtn.ariaLabel = 'Previous page';
    prevBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    `;

    if (currentPage === 1) {
      prevBtn.disabled = true;
      prevBtn.classList.add('library-pagination__arrow--disabled');
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        renderPagination();
      }
    });

    container.append(prevBtn);

    const visiblePages = getVisiblePages();
    visiblePages.forEach((page) => {
      const pageBtn = document.createElement('button');
      pageBtn.type = 'button';
      pageBtn.className = `library-pagination__page${page === currentPage ? ' library-pagination__page--active' : ''}`;
      pageBtn.textContent = page.toString();

      pageBtn.addEventListener('click', () => {
        if (currentPage !== page) {
          currentPage = page;
          renderPagination();
        }
      });

      container.append(pageBtn);
    });

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'library-pagination__arrow library-pagination__arrow--next';
    nextBtn.ariaLabel = 'Next page';
    nextBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    if (currentPage === totalPages) {
      nextBtn.disabled = true;
      nextBtn.classList.add('library-pagination__arrow--disabled');
    }

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        renderPagination();
      }
    });

    container.append(nextBtn);
  };

  window.addEventListener('resize', () => {
    renderPagination();
  });

  renderPagination();
  section.append(container);

  return section;
};