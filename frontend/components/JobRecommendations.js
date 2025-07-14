import React from 'react';
import './JobRecommendations.css';

const JobRecommendations = () => {
  const jobs = [
    {
      title: "AI Engineer",
      company: "The Email Mafia",
      location: "Work From Home",
      stipend: "₹ 50,000 - 1,00,000 /month",
      duration: "3 Months"
    },
    {
      title: "Software Development",
      company: "DiligenceVault",
      location: "Work From Home",
      stipend: "₹ 25,000 - 40,000 /month",
      duration: "6 Months"
    },
    {
      title: "AI / LLM Engineer",
      company: "BeyondChats",
      location: "Work From Home",
      stipend: "₹ 20,000 - 30,000 /month",
      duration: "5 Months"
    }
  ];

  return (
    <div className="job-recommendations">
      <h3>Recommended for you 🔥</h3>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <span className="badge">Actively hiring</span>
            <h4>{job.title}</h4>
            <p><strong>{job.company}</strong></p>
            <p>{job.location}</p>
            <p>{job.stipend}</p>
            <p>{job.duration}</p>
            <button className="view-details">View details →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
