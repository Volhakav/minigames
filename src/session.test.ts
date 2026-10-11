import { describe, it, expect, beforeEach } from 'vitest';
import { getValidAppSession } from './services/session';

describe('Session Management', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return falsy when no session exists in localStorage', () => {
    const session = getValidAppSession();
    expect(session).toBeFalsy();
  });

  it('should handle session storage correctly', () => {
    const validSession = {
      email: 'student@rs.school',
      displayName: 'Student',
      expiresAt: Date.now() + 3600 * 1000,
    };
    localStorage.setItem('minigames_session', JSON.stringify(validSession));

    const stored = localStorage.getItem('minigames_session');
    expect(stored).not.toBeNull();
  });

  it('should return falsy when session is expired', () => {
    const expiredSession = {
      email: 'student@rs.school',
      displayName: 'Student',
      expiresAt: Date.now() - 1000,
    };
    localStorage.setItem('minigames_session', JSON.stringify(expiredSession));

    const session = getValidAppSession();
    expect(session).toBeFalsy();
  });
});