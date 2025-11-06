import { useEffect, useState } from "react";
import api from "../services/api";
import FlightForm from "./FlightForm";

export default function FlightList() {
  const [flights, setFlights] = useState([]);

  const loadFlights = () => {
    api.get("flights/").then((res) => setFlights(res.data));
  };

  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-primary">
          <i className="bi bi-airplane-engines-fill me-2"></i>Flights
        </h2>
      </div>

      {/* Flight Form */}
      <FlightForm onAdded={loadFlights} />

      {/* Flight Table */}
      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Flight List</h5>
          <span className="badge bg-light text-primary">
            {flights.length} flights
          </span>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Flight</th>
                  <th scope="col">Origin</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Departure</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {flights.length > 0 ? (
                  flights.map((f, index) => (
                    <tr key={f.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{f.flight_number}</td>
                      <td>{f.origin}</td>
                      <td>{f.destination}</td>
                      <td>
                        {new Date(f.departure_time).toLocaleString("en-US", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </td>
                      <td>
                        {new Date(f.arrival_time).toLocaleString("en-US", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </td>
                      <td>
                        <span
                          className={`badge rounded-pill ${
                            f.status === "Scheduled"
                              ? "bg-success"
                              : f.status === "Delayed"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                          }`}
                        >
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-muted py-3">
                      No flights available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
