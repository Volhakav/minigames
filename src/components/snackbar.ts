export type SnackbarVariant = 'success' | 'error' | 'warning' | 'info';

export const showSnackbar = (message: string, variant: SnackbarVariant = 'info'): void => {
  let container = document.querySelector('.snackbar-container') as HTMLElement | null;

  if (!container) {
    container = document.createElement('div');
    container.className = 'snackbar-container';
    document.body.append(container);
  }

  const snackbar = document.createElement('div');
  snackbar.className = `snackbar snackbar--${variant}`;

  const text = document.createElement('span');
  text.className = 'snackbar__text';
  text.textContent = message;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'snackbar__close';
  closeBtn.innerHTML = '&times;';
  closeBtn.ariaLabel = 'Close notification';

  const removeSnackbar = () => {
    snackbar.classList.add('snackbar--hiding');
    setTimeout(() => {
      snackbar.remove();
      if (container && container.childElementCount === 0) {
        container.remove();
      }
    }, 300);
  };

  closeBtn.addEventListener('click', removeSnackbar);
  snackbar.append(text, closeBtn);
  container.append(snackbar);

  setTimeout(removeSnackbar, 4000);
};

if (typeof window !== 'undefined') {
  window.addEventListener('show-snackbar', ((
    event: CustomEvent<{ message?: string; type?: SnackbarVariant; variant?: SnackbarVariant }>
  ) => {
    const detail = event.detail;
    if (detail?.message) {
      showSnackbar(detail.message, detail.variant || detail.type || 'info');
    }
  }) as EventListener);
}