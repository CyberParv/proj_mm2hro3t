import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-semibold">Page Not Found</h1>
      <p className="text-muted-foreground">
        The page you are looking for doesn't exist. Let's get you back to Bella
        Cucina.
      </p>
      <Button asChild>
        <a href="/">Return Home</a>
      </Button>
    </div>
  );
}
