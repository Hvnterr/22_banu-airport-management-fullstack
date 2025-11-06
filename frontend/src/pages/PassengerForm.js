import { useState } from "react";
import api from "../services/api";

export default function PassengerForm({ onAdded }) {
  const [data, setData] = useState({
    name: "",
    passport_number: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("passengers/", data)
      .then(() => {
        alert("Passenger added successfully!");
        onAdded();
        setData({ name: "", passport_number: "", email: "", phone_number: "" });
      })
      .catch(() => alert("Error adding passenger."));
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">
          <i className="bi bi-person-fill-add me-2"></i>Add Passenger
        </h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter passenger name"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Passport Number</label>
              <input
                type="text"
                className="form-control"
                name="passport_number"
                value={data.passport_number}
                onChange={handleChange}
                placeholder="Enter passport number"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone_number"
                value={data.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-success px-4">
              <i className="bi bi-person-plus-fill me-2"></i>Add Passenger
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
