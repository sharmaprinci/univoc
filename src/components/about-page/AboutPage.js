import '../about/About.css'
import Navbar from '../navbar/Navbar'
function About() {
  return (
    <>
    <Navbar/>
    <main className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="title">About Us</h1>
          <ul className="intro">
           <li><div className='list-icon'></div><span> UNIVOC is dedicated to setting global standards in vocational education and integrating industry needs. As a fast-growing provider of skilling and manpower solutions in India, we focus on equipping individuals with the skills necessary for today's job market</span></li><br/>
            <li><div className='list-icon'></div><span>Our team of outsourcing industry experts ensures our programs are both practical and aligned with real-world demands</span></li>
            <br/>
          </ul>
        

      {/* Who We Are Section */}
      <section className="core-values-section">
        <h2 className="title">Core Values</h2>
        <ul className="intro">
          <li><div className='list-icon'></div><span>Prioritize holistic student development through seamless integration of education and industry</span></li>
          <li><div className='list-icon'></div><span>Forter integrity, ethical practices, and real-world application of knowledge.</span></li>
          <li><div className='list-icon'></div><span>Promotes innovation, inclusivity, and societal responsibility through industry partnership for lasting positive impact and sustainability.</span></li>
          <li><div className='list-icon'></div><span>Implement cost-effective staffing models for greater efficiency.</span></li>
          <br/>
        </ul>
      </section>

      {/* Mission Section */}
      <section className="why-us-section">
        <h2 className="title">Why Us?</h2>
        <ul className="intro">
          <li><div className='list-icon'></div><span>Our client-centric approach sets us apart. We take the time to deeply understand each client's unique challenges and needs.</span></li>
          <li><div className='list-icon'></div><span>Feel the difference with personalized solutions and dedicated service at Honover and Tyke.</span></li>
          <br/>
        </ul>
      </section>
      

      
      {/* Contact Us Section */}
      <section className="about-section">
        <h2 className="title">Contact Us</h2>
        <p className="intro">
          Have questions or need assistance? Our team is here to help! Visit our <a href="/contact" className="contact-link">Contact Us</a> page to get in touch, and let us guide you on your journey to finding the perfect courses for you.
        </p>
      </section>
      </div>
      </section>
    </main>
    </>
  )
}

export default About
