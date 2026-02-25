"use client";

import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-semibold">Something went wrong</h1>
      <p className="text-muted-foreground">
        We couldn't load this page. Please try again.
      </p>
      <Button onClick={() => window.location.reload()}>Reload Page</Button>
    </div>
  );
}
