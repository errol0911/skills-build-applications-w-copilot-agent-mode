import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'

function Dashboard() {
  return (
    <>
      <section className="welcome-band mb-4">
        <p className="eyebrow mb-2">OCTOFIT TRACKER</p>
        <h1 className="h2 mb-2">Your movement, in view.</h1>
        <p className="mb-0">A clear starting point for activity, teams, and progress.</p>
      </section>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Today&apos;s activity</p>
            <p className="metric-value">Ready to log</p>
            <p className="mb-0 text-secondary">Your activity entries will appear here.</p>
          </section>
        </div>
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Team progress</p>
            <p className="metric-value">Find your team</p>
            <p className="mb-0 text-secondary">Team activity and standings will appear here.</p>
          </section>
        </div>
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Next workout</p>
            <p className="metric-value">Suggestions soon</p>
            <p className="mb-0 text-secondary">Personalized workout ideas will appear here.</p>
          </section>
        </div>
      </div>
    </>
  )
}

function EmptySection({ title }: { title: string }) {
  return (
    <section className="metric-panel">
      <h1 className="h3 mb-2">{title}</h1>
      <p className="mb-0 text-secondary">This view is ready for OctoFit data.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <a className="brand-lockup" href="/" aria-label="OctoFit Tracker home">
            <img src={octofitLogo} alt="" />
            <span>OctoFit <strong>Tracker</strong></span>
          </a>
          <nav className="nav nav-pills" aria-label="Main navigation">
            <NavLink className="nav-link" to="/" end>Overview</NavLink>
            <NavLink className="nav-link" to="/activities">Activities</NavLink>
            <NavLink className="nav-link" to="/teams">Teams</NavLink>
          </nav>
        </div>
      </header>
      <main className="container-xl py-4 py-md-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<EmptySection title="Activities" />} />
          <Route path="/teams" element={<EmptySection title="Teams" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
