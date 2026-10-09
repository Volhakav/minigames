import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signOut 
} from 'firebase/auth';
import { auth } from './firebase';

export const registerUser = async (email: string, pass: string, username: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
  if (userCredential.user) {
    await updateProfile(userCredential.user, {
      displayName: username
    });
  }
  return userCredential.user;
};

export const loginUser = async (email: string, pass: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  return userCredential.user;
};

export const logoutUser = async () => {
  await signOut(auth);
};