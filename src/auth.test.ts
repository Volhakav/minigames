import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  loginAndCreateSession, 
  registerAndCreateSession, 
  loginWithGoogleAndCreateSession 
} from './services/auth';
import { saveAppSession } from './services/session';

vi.mock('firebase/auth', () => ({
  GoogleAuthProvider: vi.fn(),
  getAuth: vi.fn(() => ({})),
  signInWithPopup: vi.fn(async () => ({
    user: { email: 'google@rs.school', displayName: 'Google User', photoURL: null },
  })),
  signInWithEmailAndPassword: vi.fn(async (_, email) => ({
    user: { email, displayName: 'Test User', photoURL: null },
  })),
  createUserWithEmailAndPassword: vi.fn(async (_, email) => ({
    user: { email, displayName: 'New User', photoURL: null },
  })),
  updateProfile: vi.fn(async () => {}),
}));

vi.mock('./services/firebase', () => ({
  auth: {},
}));

vi.mock('./services/session', () => ({
  saveAppSession: vi.fn(),
  getValidAppSession: vi.fn(),
}));

describe('Auth Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully log in user with email/password and create session', async () => {
    const user = await loginAndCreateSession('student@rs.school', 'password123');
    expect(user).toBeDefined();
    expect(user.email).toBe('student@rs.school');
    expect(saveAppSession).toHaveBeenCalled();
  });

  it('should successfully register user and create session', async () => {
    const user = await registerAndCreateSession('new@rs.school', 'password123', 'Newbie');
    expect(user).toBeDefined();
    expect(user.email).toBe('new@rs.school');
    expect(saveAppSession).toHaveBeenCalled();
  });

  it('should successfully log in with Google and create session', async () => {
    const user = await loginWithGoogleAndCreateSession();
    expect(user).toBeDefined();
    expect(user.email).toBe('google@rs.school');
    expect(saveAppSession).toHaveBeenCalled();
  });
});