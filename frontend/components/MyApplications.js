// MyApplications.js

import React, { useEffect, useState } from 'react';
import './MyApplications.css'; // For styling (optional)

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  // Simulating API call with mock data
  useEffect(() => {
    // You can replace this with actual API call
    const fetchApplications = async () => {
      // Replace this with actual API logic
      const response = await fetch('/applications.json');
 // Backend endpoint
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <div className="applications-container">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <div className="empty-state">
          <img src="/empty-folder-icon.png" alt="No Applications" style={{ width: '120px' }} />
          <p><strong>You don't have any applications yet.</strong></p>
          <p>Start applying to boost your career with top hiring companies.</p>
          <button className="browse-btn">Browse Jobs</button>
        </div>
      ) : (
        <table className="applications-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Profile</th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.company}</td>
                <td>{app.profile}</td>
                <td>{app.appliedOn}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyApplications;
