"use client";

import { useEffect } from "react";
import { RefreshCw, Terminal, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
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
    <div className="dashboard-error">
      <div className="error-card">
        <span className="error-icon">
          <TriangleAlert size={24} />
        </span>
        <h1>Dashboard error</h1>
        <p>Something went wrong while loading this section. Please try refreshing or go back to the overview.</p>
        {error.digest && <code className="error-digest">Error ID: {error.digest}</code>}
        <div className="error-actions">
          <Button onClick={reset}>
            <RefreshCw size={16} />
            RETRY
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.assign("/dashboard")}
          >
            <Terminal size={16} />
            GO TO OVERVIEW
          </Button>
        </div>
      </div>
    </div>
  );
}

