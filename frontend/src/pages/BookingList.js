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
    <div className="card shadow-sm border-0 mt-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add New Booking</h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="flight" className="form-label fw-semibold">
              Flight
            </label>
            <select
              name="flight"
              id="flight"
              value={data.flight}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Flight</option>
              {flights.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.flight_number}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="passenger" className="form-label fw-semibold">
              Passenger
            </label>
            <select
              name="passenger"
              id="passenger"
              value={data.passenger}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Passenger</option>
              {passengers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="seat_number" className="form-label fw-semibold">
              Seat Number
            </label>
            <input
              type="text"
              name="seat_number"
              id="seat_number"
              value={data.seat_number}
              onChange={handleChange}
              placeholder="Enter Seat Number"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="status" className="form-label fw-semibold">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={data.status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary px-4">
              <i className="bi bi-plus-circle me-2"></i> Add Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
