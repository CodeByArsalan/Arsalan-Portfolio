import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-xl text-foreground/80">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-accent transition-colors duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
