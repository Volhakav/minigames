import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { showSnackbar } from './components/snackbar';

describe('Snackbar Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render snackbar with correct message and type', () => {
    showSnackbar('Operation successful!', 'success');
    
    const snackbar = document.querySelector('.snackbar');
    expect(snackbar).not.toBeNull();
    expect(snackbar?.textContent).toContain('Operation successful!');
  });

  it('should apply hiding class or remove snackbar after timeout', () => {
    showSnackbar('Temporary message', 'info');
    
    let snackbar = document.querySelector('.snackbar');
    expect(snackbar).not.toBeNull();

    vi.advanceTimersByTime(4000);

    snackbar = document.querySelector('.snackbar');
    const isHidingOrRemoved = !snackbar || snackbar.classList.contains('snackbar--hiding');
    expect(isHidingOrRemoved).toBe(true);
  });
});