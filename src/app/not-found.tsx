import Link from "next/link";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-card">
        <span className="error-icon error-icon--404">
          <span className="error-404-number">404</span>
        </span>
        <h1>Page not found</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Check the URL or navigate back to the dashboard.
        </p>
        <div className="error-actions">
          <Link className="button button--primary" href="/dashboard">
            <Home size={16} />
            GO TO DASHBOARD
          </Link>
          <Link className="button button--outline" href="/">
            <Terminal size={16} />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
