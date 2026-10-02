import { fetchCategories, CategoryItem } from '../services/api';
import { showSnackbar } from './snackbar';

export interface SortOption {
  value: string;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  { value: 'rating-desc', label: 'Sort by: Rating ↓' },
  { value: 'rating-asc', label: 'Sort by: Rating ↑' },
  { value: 'name-asc', label: 'Sort by: Name A-Z' },
  { value: 'name-desc', label: 'Sort by: Name Z-A' },
];

interface LibraryControlsCallbacks {
  onCategoryChange: (categoryValue: string) => void;
  onSortChange: (sortValue: string) => void;
}

export const createLibraryControls = (callbacks: LibraryControlsCallbacks): HTMLElement => {
  const container = document.createElement('section');
  container.className = 'library-controls';

  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'library-controls__header';

  const title = document.createElement('h1');
  title.className = 'library-controls__title';
  title.textContent = 'Game Library';

  const subtitle = document.createElement('p');
  subtitle.className = 'library-controls__subtitle';
  subtitle.textContent = 'Browse our collection of casual mini-games';

  titleWrapper.append(title, subtitle);

  const controlsRow = document.createElement('div');
  controlsRow.className = 'library-controls__row';

  const chipsContainer = document.createElement('div');
  chipsContainer.className = 'library-controls__chips';
  chipsContainer.innerHTML = '<span style="opacity: 0.6;">Loading categories...</span>';

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

  for (const [index, option] of SORT_OPTIONS.entries()) {
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

      for (const opt of sortMenu.querySelectorAll('.library-controls__sort-option')) {
        opt.classList.remove('library-controls__sort-option--active');
      }
      btn.classList.add('library-controls__sort-option--active');

      sortWrapper.classList.remove('library-controls__sort--open');

      callbacks.onSortChange(option.value);
    });

    li.append(btn);
    sortMenu.append(li);
  }

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

  const loadCategories = async (): Promise<void> => {
    try {
      const categories: CategoryItem[] = await fetchCategories();
      chipsContainer.innerHTML = '';

      const activeCategory = categories.find((c) => c.isDefault)?.value || categories.find((c) => c.isDefault)?.slug || 'all';

      for (const cat of categories) {
        const catValue = cat.value || cat.slug || 'all';
        const catLabel = cat.label || cat.name || catValue;

        const chipBtn = document.createElement('button');
        chipBtn.type = 'button';
        const isActive = catValue === activeCategory;
        chipBtn.className = `library-controls__chip${isActive ? ' library-controls__chip--active' : ''}`;
        chipBtn.textContent = catLabel;
        chipBtn.dataset.value = catValue;

        chipBtn.addEventListener('click', () => {
          for (const btn of chipsContainer.querySelectorAll('.library-controls__chip')) {
            btn.classList.remove('library-controls__chip--active');
          }
          chipBtn.classList.add('library-controls__chip--active');
          callbacks.onCategoryChange(catValue);
        });

        chipsContainer.append(chipBtn);
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Failed to load categories';
      showSnackbar(msg, 'error');
    }
  };

  loadCategories();

  return container;
};