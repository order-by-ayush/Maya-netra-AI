
'use client';

import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopOnly } from '@/components/desktop-only';
import { useAuth } from '@/firebase';
import { getRedirectResult } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export function AppContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [forceShow, setForceShow] = useState(false);
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          // User successfully signed in.
          toast({
            title: 'Signed in',
            description: 'You have successfully signed in with Google.',
          });
          router.push('/');
        }
      } catch (error: any) {
        // Handle Errors here.
        console.error('Google Sign-In Redirect Error:', error);
        if (error.code !== 'auth/no-auth-operation-for-redirect') {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: error.message || 'There was a problem with your sign-in request.',
            });
        }
      } finally {
        setIsVerifying(false);
      }
    };

    handleRedirectResult();
  }, [auth, toast, router]);


  const handleContinue = () => {
    setForceShow(true);
  };

  if (isMobile && !forceShow) {
    return <DesktopOnly onContinue={handleContinue} />;
  }

  if (isVerifying) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  return <>{children}</>;
}
