import { faArrowAltCircleDown, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Add the down-right curved arrow icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import image1 from "../../images/about.jpg";
import image2 from "../../images/about2.jpg";
import image3 from "../../images/about3.jpg";
import image4 from "../../images/about4.jpg";
import '../about/About.css';

function About() {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16">
        {/* Left Section: Text */}
        <section className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-black mb-4">About Univoc</h1>
          <p className="text-lg text-gray-700 mb-6">
            UNIVOC is dedicated to setting global standards in vocational education and integrating industry needs.
            As a fast-growing provider of skilling and manpower solutions in India, we focus on equipping individuals with
            the skills necessary for today's job market.
          </p>

          {/* Core Values */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faHome} size="sm" />
            </div>
            <h2 className="text-xl font-semibold text-black">Partner for your Workforce Excellence</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Univoc prioritizes holistic student development through seamless integration of education and industry. 
            We foster integrity, ethical practices, and real-world application of knowledge. By promoting innovation, inclusivity, 
            and societal responsibility through industry partnerships, we strive to implement cost-effective staffing models for greater efficiency.
          </p>

          {/* Why Us */}
          <div className="flex items-center space-x-4 mt-6 mb-4">
            <div className="bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faShoppingCart} size="sm" />
            </div>
            <h2 className="text-xl font-semibold text-black">Skill trainings and Certifications</h2>
          </div>
          <p className="text-gray-700">
            Our client-centric approach sets us apart. We take the time to deeply understand each client's unique challenges and needs, 
            offering personalized solutions and dedicated service to ensure satisfaction and success with Univoc.
          </p>

          {/* Explore More About Us */}
          <div className="flex items-center space-x-4 mt-6 mb-4">
            <h2 className="text-xl font-semibold text-black">EXPLORE MORE ABOUT US</h2>
            <button className="bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowAltCircleDown} size="sm" />
            </button>
          </div>
        </section>

        {/* Right Section: Image Slider */}
        <section className="flex-1 relative w-full lg:w-auto h-80 lg:h-[400px]">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
