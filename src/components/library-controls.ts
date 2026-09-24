import categoriesData from '../data/categories.json';

export interface Category {
  slug: string;
  label: string;
  isDefault?: boolean;
}

const CATEGORIES: Category[] = categoriesData.data;

const SORT_OPTIONS = [
  { value: 'rating-desc', label: 'Sort by: Rating ↓' },
  { value: 'rating-asc', label: 'Sort by: Rating ↑' },
  { value: 'title-asc', label: 'Sort by: Title A-Z' },
  { value: 'likes-desc', label: 'Sort by: Popularity' },
];

export const createLibraryControls = (): HTMLElement => {
  const container = document.createElement('section');
  container.className = 'library-controls';

  // --- Title Section ---
  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'library-controls__header';

  const title = document.createElement('h1');
  title.className = 'library-controls__title';
  title.textContent = 'Game Library';

  const subtitle = document.createElement('p');
  subtitle.className = 'library-controls__subtitle';
  subtitle.textContent = 'Browse our collection of casual mini-games';

  titleWrapper.append(title, subtitle);

  // --- Controls Row (Chips + Sort) ---
  const controlsRow = document.createElement('div');
  controlsRow.className = 'library-controls__row';

  // --- Filtering Chips ---
  const chipsContainer = document.createElement('div');
  chipsContainer.className = 'library-controls__chips';

  CATEGORIES.forEach((cat) => {
    const chipBtn = document.createElement('button');
    chipBtn.type = 'button';
    chipBtn.className = `library-controls__chip${cat.isDefault ? ' library-controls__chip--active' : ''}`;
    chipBtn.textContent = cat.label;
    chipBtn.dataset.slug = cat.slug;

    chipBtn.addEventListener('click', () => {
      chipsContainer.querySelectorAll('.library-controls__chip').forEach((btn) => {
        btn.classList.remove('library-controls__chip--active');
      });
      chipBtn.classList.add('library-controls__chip--active');
    });

    chipsContainer.append(chipBtn);
  });

  // --- Custom Sort Dropdown ---
  const sortWrapper = document.createElement('div');
  sortWrapper.className = 'library-controls__sort';

  const sortTrigger = document.createElement('button');
  sortTrigger.type = 'button';
  sortTrigger.className = 'library-controls__sort-trigger';
  sortTrigger.innerHTML = `
    <span class="library-controls__sort-label">${SORT_OPTIONS[0].label}</span>
    <svg class="library-controls__sort-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;

  const sortMenu = document.createElement('ul');
  sortMenu.className = 'library-controls__sort-menu';

  SORT_OPTIONS.forEach((option, index) => {
    const li = document.createElement('li');
    li.className = 'library-controls__sort-item';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `library-controls__sort-option${index === 0 ? ' library-controls__sort-option--active' : ''}`;
    btn.textContent = option.label;
    btn.dataset.value = option.value;

    btn.addEventListener('click', () => {
      const labelSpan = sortTrigger.querySelector('.library-controls__sort-label');
      if (labelSpan) labelSpan.textContent = option.label;

      sortMenu.querySelectorAll('.library-controls__sort-option').forEach((opt) => {
        opt.classList.remove('library-controls__sort-option--active');
      });
      btn.classList.add('library-controls__sort-option--active');

      sortWrapper.classList.remove('library-controls__sort--open');
    });

    li.append(btn);
    sortMenu.append(li);
  });

  sortTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    sortWrapper.classList.toggle('library-controls__sort--open');
  });

  document.addEventListener('click', () => {
    sortWrapper.classList.remove('library-controls__sort--open');
  });

  sortWrapper.append(sortTrigger, sortMenu);
  controlsRow.append(chipsContainer, sortWrapper);
  container.append(titleWrapper, controlsRow);

  return container;
};