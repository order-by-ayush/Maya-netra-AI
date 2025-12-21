'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { DesktopOnly } from '@/components/desktop-only';

export function AppContent({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DesktopOnly />;
  }

  return <>{children}</>;
}
