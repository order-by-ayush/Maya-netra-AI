
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome } from 'lucide-react';
import { useAuthHandler } from '@/hooks/use-auth-handler';
import { Header } from '@/components/layout/header';

const LoginPage = () => {
  const { handleGoogleSignIn } = useAuthHandler();

  return (
    <div className="bg-background text-foreground min-h-screen font-body flex flex-col">
       <Header />
      <main className="flex-grow flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>
              Sign in to your account to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
            >
              <Chrome className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
