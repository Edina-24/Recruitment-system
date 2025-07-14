import React from "react";
import "./JobDetails.css"; // We'll create this for styling

const JobListing = () => {
  return (
    <div className="job-container">
      <h1>Front End Developer Fresher Job (Remote)</h1>

      <div className="job-info">
        <span><strong>Company:</strong> NoFeeSwap</span>
        <span><strong>Start:</strong> Immediately</span>
        <span><strong>CTC:</strong> ₹45,00,000 – ₹65,00,000 / year</span>
        <span><strong>Experience:</strong> 0 years</span>
        <span><strong>Apply by:</strong> 9 Aug' 25</span>
        <span className="badge">Actively Hiring</span>
      </div>

      <section>
        <h2>About the Job</h2>
        <ul>
          <li>Build and update pages using HTML, CSS, and JavaScript (React preferred)</li>
          <li>Work with designers to convert mockups into working pages</li>
          <li>Ensure responsiveness across mobile, tablet, and desktop</li>
          <li>Fix bugs and maintain smooth website operation</li>
          <li>Test work on different browsers</li>
          <li>Improve based on feedback</li>
        </ul>
      </section>

      <section>
        <h2>Skills Required</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>React</span>
        </div>
      </section>

      <section>
        <h2>Other Requirements</h2>
        <ul>
          <li>Basic HTML, CSS, JavaScript knowledge</li>
          <li>Experience with any front-end framework is a plus</li>
          <li>Clear communication and willingness to learn</li>
          <li>Reliable internet connection</li>
          <li>Bonus: Familiar with Figma or Git</li>
        </ul>
      </section>

      <section>
        <h2>Openings</h2>
        <p>3 positions available</p>
      </section>

      <section>
        <h2>Perks</h2>
        <p>5 days a week</p>
      </section>

      <a href="#" className="apply-btn">Apply now</a>

      <div className="footer">
        NoFeeSwap is a decentralized exchange platform for digital assets. Hiring since July 2025.
      </div>
    </div>
  );
};

export default JobListing;
