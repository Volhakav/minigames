import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export interface AppSession {
  displayName: string;
  email: string;
  avatarUrl?: string;
  authenticatedAt: number;
}

const SESSION_KEY = 'minigames:spa-app:app-session';
const SESSION_TTL_MS = 5 * 60 * 1000; 

const showSnackbar = (message: string, type: 'success' | 'error' | 'warning'): void => {
  window.dispatchEvent(
    new CustomEvent('show-snackbar', {
      detail: { message, type },
    })
  );
};

export const saveAppSession = (data: {
  displayName: string;
  email: string;
  avatarUrl?: string;
}): void => {
  const session: AppSession = {
    displayName: data.displayName,
    email: data.email,
    avatarUrl: data.avatarUrl,
    authenticatedAt: Date.now(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getValidAppSession = (): AppSession | undefined => {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return undefined;

  try {
    const parsed = JSON.parse(raw);

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof parsed.displayName !== 'string' ||
      typeof parsed.email !== 'string' ||
      typeof parsed.authenticatedAt !== 'number' ||
      (parsed.avatarUrl !== undefined && typeof parsed.avatarUrl !== 'string')
    ) {
      throw new Error('Invalid session data structure');
    }

    const now = Date.now();
    const age = now - parsed.authenticatedAt;

    if (age < 0 || age >= SESSION_TTL_MS) {
      clearAppSessionAndSignOut(true);
      return undefined;
    }

    return parsed;
  } catch {
    clearAppSessionAndSignOut(true);
    return undefined;
  }
};

export const clearAppSessionAndSignOut = (notifyExpiration = false): void => {
  localStorage.removeItem(SESSION_KEY);

  signOut(auth).catch(() => {
    showSnackbar('Failed to sign out from server. You are in Guest Mode locally.', 'error');
  });

  if (notifyExpiration) {
    showSnackbar('Your session has expired. Please log in again.', 'warning');
  }

  window.dispatchEvent(new CustomEvent('auth-state-changed'));
};

if (typeof window !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      getValidAppSession();
    }
  });
}