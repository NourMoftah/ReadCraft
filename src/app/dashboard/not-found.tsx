import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function DashboardNotFound() {
  return (
    <div className="dashboard-error">
      <div className="error-card">
        <span className="error-icon error-icon--404">
          <span className="error-404-number">404</span>
        </span>

        <h1>Page not found</h1>

        <p>
          This dashboard page doesn&apos;t exist. Navigate back to your dashboard
          overview.
        </p>

        <div className="error-actions">
          <Link className="button button--primary" href="/dashboard">
            <Home size={16} />
            GO TO OVERVIEW
          </Link>

          <Link className="button button--outline" href="/">
            <Terminal size={16} />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}