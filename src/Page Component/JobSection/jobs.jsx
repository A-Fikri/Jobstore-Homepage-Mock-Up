import React from "react";
import JobsData from "../../Data/JobsData.jsx";
import "./index.css";

export default function Jobs() {
  const getStyleByCategory = (category) => {
    switch (category) {
      case "Selangor":
        return "selangor";
      case "Penang":
      case "Pulau Pinang":
        return "penang";
      case "Kuala Lumpur":
        return "kuala-lumpur";
      case "Kedah":
        return "kedah";
      case "Sarawak":
        return "sarawak";
      case "Sabah":
        return "sabah";
      case "Melacca":
        return "melacca";
      case "Johor":
        return "johor";
      default:
        return "other";
    }
  };

  return (
    <>
      <div className="job-titles">
        <p className="latest-jobs-text">LATEST JOBS</p>
        <p className="see-all-jobs">SEE ALL JOBS ❯</p>
      </div>
      <div className="parent">
        <div className="jobs-section">
          <div className="jobs">
            {JobsData.map((job, index) => (
              <div key={index} className="card">
                <img src={job.image} alt={job.position} className="image" />
                <button
                  className={`category ${getStyleByCategory(job.category)}`}
                >
                  {job.category}
                </button>
                <p className="position">{job.position}</p>
                <div className="bottom-row">
                  <p className="company-name">{job.company_name}</p>
                  <img
                    src={job.company_logo}
                    alt={job.company_name}
                    className="company-logo-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
