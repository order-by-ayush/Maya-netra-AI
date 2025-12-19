export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 border-t border-border mt-12">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MAYA-NETRA AI. All Rights Reserved.</p>
        <p className="mt-2">A conceptual tool for demonstrating deepfake detection technology.</p>
      </div>
    </footer>
  );
}
