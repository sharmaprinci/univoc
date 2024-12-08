import './EmployerSection.css';

const EmployerSection = () => {
  return (
    <div className="employer-container">
      <div className="employer-section">
        <div className="employer-box">
          <h2 className='emp-div'>ARE YOU AN EMPLOYER?</h2>
          <p className='font-18'>Hire in 30 minutes</p>
          <div className="post-job-button">
          <strong>Post Free Job</strong>
          </div>
          <div class="job-reg-count">
          <div className='count'>
            <svg width="56.875" height="45.109" viewBox="0 0 56.875 45.109"></svg>
          </div>
          <div class="job-reg-section">
          <div class="job-reg-title">1.5 Lakhs+</div>
          <div class="job-reg-subtitle">Registration Per month</div>
          </div>
          </div>
          <div class="job-reg-count">
          <div class="count">
          <svg width="56.875" height="45.109" viewBox="0 0 56.875 45.109"></svg>
          </div>
          <div class="job-reg-section">
          <div class="job-reg-title">50 Lakhs+</div>
          <div class="job-reg-subtitle">Active Job Seekers</div>
          </div>
          </div>
        </div>

        
        <div className="why-univoc-box">
          <div className="why-univoc-content">
            <h2 className='why-univoc'>WHY UNIVOC?</h2>
            <p className="click-note">Click on each point to know more...</p>
            <ul className="benefits-list">
              <li>Benefits of industry</li>
              <li>Selection of candidates</li>
              <li>Industry benefits</li>
              <li>Benefits to trainees</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src="/assets/linkedin-sales.png" 
              alt="Why Univoc"
              className="univoc-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSection;
