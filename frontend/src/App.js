import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FlightList from "./pages/FlightList";
import PassengerList from "./pages/PassengerList";
import BookingList from "./pages/BookingList";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">Airport Management</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Flights</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/passengers">Passengers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bookings">Bookings</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container py-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<FlightList />} />
            <Route path="/passengers" element={<PassengerList />} />
            <Route path="/bookings" element={<BookingList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
