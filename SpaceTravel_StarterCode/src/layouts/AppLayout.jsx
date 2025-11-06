import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">🚀 Space Travel Command</h1>
      </header>

      {/* Centered Dashboard Buttons */}
      <div className="dashboard-buttons">
        <Link to="/" className="btn btn-home">
          Home
        </Link>
        <Link to="/spacecrafts" className="btn btn-spacecraft">
          Spacecrafts
        </Link>
        <Link to="/planets" className="btn btn-planets">
          Planets
        </Link>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        © 2025 Space Travel Command. All rights reserved.
      </footer>
    </div>
  );
}
