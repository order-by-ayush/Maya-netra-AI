
'use client';

import { useAuth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useToast } from './use-toast';
import { useRouter } from 'next/navigation';

export function useAuthHandler() {
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: 'Signed in',
        description: 'You have successfully signed in with Google.',
      });
      router.push('/');
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'There was a problem with your request.',
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
      router.push('/');
    } catch (error: any) {
      console.error('Sign-Out Error:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Failed to sign out. Please try again.',
      });
    }
  };

  return {
    handleGoogleSignIn,
    handleSignOut,
  };
}
