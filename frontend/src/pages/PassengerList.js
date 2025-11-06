import { useEffect, useState } from "react";
import api from "../services/api";
import PassengerForm from "./PassengerForm";

export default function PassengerList() {
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = () => {
    api.get("passengers/").then((res) => setPassengers(res.data));
  };

  useEffect(() => {
    loadPassengers();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-success">
          <i className="bi bi-people-fill me-2"></i>Passengers
        </h2>
      </div>

      {/* Passenger Form */}
      <PassengerForm onAdded={loadPassengers} />

      {/* Passenger Table */}
      <div className="card mt-4 shadow-sm border-0">
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Passenger List</h5>
          <span className="badge bg-light text-success">
            {passengers.length} passengers
          </span>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Passport</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {passengers.length > 0 ? (
                  passengers.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td className="fw-semibold">{p.name}</td>
                      <td>{p.passport_number}</td>
                      <td>{p.email || "-"}</td>
                      <td>{p.phone_number || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-3">
                      No passengers available.
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
