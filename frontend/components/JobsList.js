import React, { useEffect, useState } from 'react';
import './JobsList.css';

const JobsList = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [profile, setProfile] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState('');
  const [inCity, setInCity] = useState(false);
  const [remote, setRemote] = useState(false);
  const [partTime, setPartTime] = useState(false);

  useEffect(() => {
    // Load from public/jobs.json
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => {
        setAllJobs(data);
        setFilteredJobs(data); // Show all initially
      })
      .catch(err => console.error(err));
  }, []);

  // Filtering logic
  const filterJobs = () => {
    const filtered = allJobs.filter((job) => {
      const matchesProfile = profile === '' || job.title.toLowerCase().includes(profile.toLowerCase());
      const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
      const matchesSalary = parseFloat(job.salary) >= salary;
      const matchesExperience = experience === '' || job.experience === experience;

      const matchesInCity = !inCity || job.location.toLowerCase().includes(location.toLowerCase());
      const matchesRemote = !remote || job.jobType.toLowerCase().includes('remote');
      const matchesPartTime = !partTime || job.jobType.toLowerCase().includes('part');

      return (
        matchesProfile &&
        matchesLocation &&
        matchesSalary &&
        matchesExperience &&
        matchesInCity &&
        matchesRemote &&
        matchesPartTime
      );
    });

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    filterJobs();
  }, [profile, location, salary, experience, inCity, remote, partTime]);

  const handleClearAll = () => {
    setProfile('');
    setLocation('');
    setSalary(0);
    setExperience('');
    setInCity(false);
    setRemote(false);
    setPartTime(false);
  };

  return (
    <div className="jobs-container">
      <div className="filters">
        <h3>Filters</h3>

        <input
          type="text"
          placeholder="e.g. Marketing"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />

        <input
          type="text"
          placeholder="e.g. Delhi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={inCity}
              onChange={() => setInCity(!inCity)}
            />
            <span>Jobs in my city</span>
          </label>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={remote}
              onChange={() => setRemote(!remote)}
            />
            <span>Work from home</span>
          </label>
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={partTime}
              onChange={() => setPartTime(!partTime)}
            />
            <span>Part-time</span>
          </label>
        </div>

        <label>Annual salary (in lakhs)</label>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <p>{salary} LPA</p>

        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="">Select years of experience</option>
          <option value="0">0 years</option>
          <option value="1">1 year</option>
          <option value="2">2+ years</option>
        </select>

        <button onClick={handleClearAll}>Clear All</button>
      </div>

      <div className="job-listings">
        <h2>{filteredJobs.length} Jobs Found</h2>
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-card">
            <h4>{job.title}</h4>
            <p>
              <strong>{job.company}</strong>{' '}
              {job.active && <span className="badge">Actively hiring</span>}
            </p>
            <p className="location">{job.location}</p>
            <p>₹ {job.salary} LPA | {job.experience} year(s)</p>
            <p>{job.posted} ago • {job.jobType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
