import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import banner4 from '../images/banner4.png';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State for current slide index
  const images = [banner3, banner1, banner2, banner4]; // Array of image sources

  // Effect to initialize AOS and set up auto-slide
  useEffect(() => {
    AOS.init({ duration: 500, once: true }); // Initialize AOS

    // Set up interval to automatically change slides every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Adjust the time as needed

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel className="w-full mx-auto">
          <CarouselContent className="space-x-4 sm:space-x-2">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className={`relative w-full bg-cover bg-center min-h-screen ${currentIndex === index ? "block" : "hidden"}`}
              >
                <img 
                  src={img} 
                  alt={`Image ${index + 1}`} 
                  className="absolute inset-0 w-full h-[100%] object-cover"
                />
                {/* Button at the Bottom */}
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
                >
                

                <button className="border-2 border-sky-600 text-sky-600 bg-blue-100 py-2 px-6  rounded-full text-lg font-medium shadow-sm hover:bg-sky-800 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 flex items-center justify-center space-x-2 ">

                  <span>Connect with Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          
        </Carousel>
      </div>
    </>
  );
};

export default HomeSection;
