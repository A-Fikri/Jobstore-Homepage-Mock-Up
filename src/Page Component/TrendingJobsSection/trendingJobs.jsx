import React from "react";
import TrendingJobsData from "../../Data/TrendingJobsData.jsx";
import "./index.css";

export default function TrendingJobs() {
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
      <div className="hashtags">
        <p className="jobs-text">#Trending Jobs</p>
        <p className="jobs-text">#Highest Paying Jobs</p>
        <p className="jobs-text">#Internship</p>
        <p className="jobs-text">#Recruiter</p>
      </div>
      <div className="parent">
        <div className="trending-jobs-section">
          <div className="trending-jobs">
            {TrendingJobsData.map((job, index) => (
              <a href={job.link} className="trending-job-link">
                <div key={index} className="trending-card">
                  <button className={getStyleByCategory(job.category)}>
                    {job.category}
                  </button>
                  <p className="position">{job.position}</p>
                  <div className="bottom-row">
                    <p className="company-name">{job.company_name}</p>
                    <img
                      src={job.company_logo}
                      alt={job.company_name}
                      className="company-logo"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
