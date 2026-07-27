export default function Loading() {
  return (
    <main className="loading-page">
      <div className="loading-shell">
        <div className="loading-brand">
          <span className="loading-brand-mark" />
          <span className="loading-brand-text" />
        </div>
        <div className="loading-hero">
          <div className="loading-badge" />
          <div className="loading-title" />
          <div className="loading-title loading-title--short" />
          <div className="loading-text" />
          <div className="loading-text loading-text--short" />
        </div>
        <div className="loading-features">
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
        </div>
      </div>
    </main>
  );
}

