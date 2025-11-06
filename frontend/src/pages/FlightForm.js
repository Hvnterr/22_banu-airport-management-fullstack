import { useState } from "react";
import api from "../services/api";

export default function FlightForm({ onAdded }) {
  const [data, setData] = useState({
    flight_number: "",
    origin: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    status: "Scheduled",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("flights/", data)
      .then(() => {
        alert("✅ Flight added successfully!");
        onAdded();
        setData({
          flight_number: "",
          origin: "",
          destination: "",
          departure_time: "",
          arrival_time: "",
          status: "Scheduled",
        });
      })
      .catch(() => alert("❌ Error adding flight."));
  };

  return (
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add New Flight</h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="flight_number" className="form-label fw-semibold">
                Flight Number
              </label>
              <input
                type="text"
                name="flight_number"
                id="flight_number"
                className="form-control"
                placeholder="Enter Flight Number"
                value={data.flight_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="status" className="form-label fw-semibold">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="form-select"
                value={data.status}
                onChange={handleChange}
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Delayed">Delayed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="origin" className="form-label fw-semibold">
                Origin
              </label>
              <input
                type="text"
                name="origin"
                id="origin"
                className="form-control"
                placeholder="Origin City / Airport"
                value={data.origin}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="destination" className="form-label fw-semibold">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                className="form-control"
                placeholder="Destination City / Airport"
                value={data.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="departure_time" className="form-label fw-semibold">
                Departure Time
              </label>
              <input
                type="datetime-local"
                name="departure_time"
                id="departure_time"
                className="form-control"
                value={data.departure_time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="arrival_time" className="form-label fw-semibold">
                Arrival Time
              </label>
              <input
                type="datetime-local"
                name="arrival_time"
                id="arrival_time"
                className="form-control"
                value={data.arrival_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-primary px-4">
              <i className="bi bi-airplane-engines me-2"></i>
              Add Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
