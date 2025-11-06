import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("dashboard/").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold text-primary">
        <i className="bi bi-speedometer2 me-2"></i> Dashboard Overview
      </h2>

      <div className="row g-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <div className="mb-2">
                  <i
                    className={`bi ${
                      key.includes("cancel")
                        ? "bi-x-circle text-danger"
                        : key.includes("upcoming")
                        ? "bi-calendar-check text-success"
                        : key.includes("booking")
                        ? "bi-ticket-perforated text-info"
                        : "bi-airplane text-primary"
                    } fs-2`}
                  ></i>
                </div>
                <h6 className="card-title text-capitalize text-muted">
                  {key.replaceAll("_", " ")}
                </h6>
                <h3 className="fw-bold">{value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
