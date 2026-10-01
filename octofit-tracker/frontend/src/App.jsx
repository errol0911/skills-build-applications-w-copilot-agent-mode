import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Dashboard() {
  return (
    <>
      <section className="welcome-band mb-4">
        <p className="eyebrow mb-2">OCTOFIT TRACKER</p>
        <h1 className="h2 mb-2">Your movement, in view.</h1>
        <p className="mb-0">Explore users, teams, activities, standings, and workout suggestions from the API.</p>
      </section>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Backend</p>
            <p className="metric-value">Port 8000</p>
            <p className="mb-0 text-secondary">Express routes are available under <span className="text-nowrap">/api/</span>.</p>
          </section>
        </div>
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Frontend</p>
            <p className="metric-value">Port 5173</p>
            <p className="mb-0 text-secondary">React Router powers the presentation tier navigation.</p>
          </section>
        </div>
        <div className="col-12 col-md-4">
          <section className="metric-panel h-100">
            <p className="metric-label">Data</p>
            <p className="metric-value">MongoDB</p>
            <p className="mb-0 text-secondary">Seeded OctoFit records are loaded through Mongoose models.</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <NavLink className="brand-lockup" to="/" aria-label="OctoFit Tracker home">
            <img src={octofitLogo} alt="" />
            <span>OctoFit <strong>Tracker</strong></span>
          </NavLink>
          <nav className="nav nav-pills" aria-label="Main navigation">
            <NavLink className="nav-link" to="/" end>Overview</NavLink>
            <NavLink className="nav-link" to="/users">Users</NavLink>
            <NavLink className="nav-link" to="/teams">Teams</NavLink>
            <NavLink className="nav-link" to="/activities">Activities</NavLink>
            <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
            <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
          </nav>
        </div>
      </header>
      <main className="container-xl py-4 py-md-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}