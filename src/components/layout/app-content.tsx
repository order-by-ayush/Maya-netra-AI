'use client';

import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopOnly } from '@/components/desktop-only';

export function AppContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [forceShow, setForceShow] = useState(false);

  const handleContinue = () => {
    setForceShow(true);
  };

  if (isMobile && !forceShow) {
    return <DesktopOnly onContinue={handleContinue} />;
  }

  return <>{children}</>;
}
