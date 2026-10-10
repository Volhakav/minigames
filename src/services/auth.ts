import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth';
import { auth } from './firebase';
import { saveAppSession } from './session';

export const registerAndCreateSession = async (email: string, pass: string, username: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
  const user = userCredential.user;

  if (user) {
    await updateProfile(user, { displayName: username });
  }


  saveAppSession({
    displayName: username || user.email?.split('@')[0] || 'Gamer',
    email: user.email || email,
    avatarUrl: user.photoURL || undefined,
  });

  return user;
};

export const loginAndCreateSession = async (email: string, pass: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  const user = userCredential.user;

  const displayName = user.displayName || user.email?.split('@')[0] || 'Gamer';

  saveAppSession({
    displayName,
    email: user.email || email,
    avatarUrl: user.photoURL || undefined,
  });

  return user;
};