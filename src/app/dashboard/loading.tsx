export default function DashboardLoading() {
  return (
    <div className="dashboard-loading">
      <div className="dashboard-loading-header">
        <div className="loading-badge" />
        <div className="loading-title loading-title--short" />
        <div className="loading-text loading-text--short" />
      </div>
      <div className="loading-stats">
        <div className="loading-stat" />
        <div className="loading-stat" />
        <div className="loading-stat" />
      </div>
      <div className="loading-panel">
        <div className="loading-panel-header">
          <div className="loading-title loading-title--short" />
          <div className="loading-text loading-text--short" />
        </div>
        <div className="loading-rows">
          <div className="loading-row" />
          <div className="loading-row" />
          <div className="loading-row" />
        </div>
      </div>
    </div>
  );
}

