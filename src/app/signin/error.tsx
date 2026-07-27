"use client";

import { useEffect } from "react";
import { RefreshCw, Terminal, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-card">
        <span className="error-icon">
          <TriangleAlert size={24} />
        </span>
        <h1>Sign-in unavailable</h1>
        <p>We&apos;re unable to load the sign-in page right now. Please try again or come back later.</p>
        {error.digest && <code className="error-digest">Error ID: {error.digest}</code>}
        <div className="error-actions">
          <Button onClick={reset}>
            <RefreshCw size={16} />
            TRY AGAIN
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.assign("/")}
          >
            <Terminal size={16} />
            BACK TO HOME
          </Button>
        </div>
      </div>
    </main>
  );
}

