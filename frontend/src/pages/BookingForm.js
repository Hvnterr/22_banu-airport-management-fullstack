import { useState, useEffect } from "react";
import api from "../services/api";

export default function BookingForm({ onAdded }) {
  const [data, setData] = useState({
    flight: "",
    passenger: "",
    seat_number: "",
    status: "Confirmed",
  });

  const [flights, setFlights] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    api.get("flights/").then((res) => setFlights(res.data));
    api.get("passengers/").then((res) => setPassengers(res.data));
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("bookings/", data)
      .then(() => {
        alert("✅ Booking added successfully!");
        onAdded();
        setData({
          flight: "",
          passenger: "",
          seat_number: "",
          status: "Confirmed",
        });
      })
      .catch(() => alert("❌ Error adding booking."));
  };

  return (
    <div className="card shadow-sm border-0 mb-5">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className="bi bi-journal-plus me-2"></i>Add New Booking
        </h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Flight Select */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Flight</label>
            <select
              name="flight"
              value={data.flight}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Flight</option>
              {flights.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.flight_number} - {f.origin} → {f.destination}
                </option>
              ))}
            </select>
          </div>

          {/* Passenger Select */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Passenger</label>
            <select
              name="passenger"
              value={data.passenger}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Passenger</option>
              {passengers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.passport_number})
                </option>
              ))}
            </select>
          </div>

          {/* Seat Number */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Seat Number</label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <i className="bi bi-airplane-fill"></i>
              </span>
              <input
                name="seat_number"
                value={data.seat_number}
                onChange={handleChange}
                placeholder="Enter Seat Number"
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Status</label>
            <select
              name="status"
              value={data.status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary px-4">
              <i className="bi bi-plus-circle me-2"></i>Add Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
