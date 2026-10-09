import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export const SESSION_STORAGE_KEY = 'minigames:spa-app:app-session';

const SESSION_LIFETIME_MS = 5 * 60 * 1000;

export interface AppSession {
  displayName: string;
  email: string;
  authenticatedAt: number;
  avatarUrl?: string;
}

export const saveAppSession = (sessionData: Omit<AppSession, 'authenticatedAt'>): AppSession => {
  const session: AppSession = {
    ...sessionData,
    authenticatedAt: Date.now(),
  };
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  return session;
};


export const getValidAppSession = (): AppSession | null => {
  const rawData = localStorage.getItem(SESSION_STORAGE_KEY);
  if (!rawData) return null;

  try {
    const session = JSON.parse(rawData);

    if (
      !session ||
      typeof session !== 'object' ||
      typeof session.displayName !== 'string' ||
      typeof session.email !== 'string' ||
      typeof session.authenticatedAt !== 'number'
    ) {
      clearAppSessionAndSignOut();
      return null;
    }

    const now = Date.now();
    const elapsed = now - session.authenticatedAt;

    if (elapsed > SESSION_LIFETIME_MS || elapsed < 0) {
      clearAppSessionAndSignOut();
      return null;
    }

    return session as AppSession;
  } catch {
    clearAppSessionAndSignOut();
    return null;
  }
};

export const clearAppSessionAndSignOut = (): void => {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  signOut(auth).catch(() => {
  });
};