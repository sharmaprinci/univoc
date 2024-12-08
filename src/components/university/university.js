import React, { useEffect } from "react";

import university from '../../images/niilm uni.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const University = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div className="container text-center px-4">
            <h1 
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-8" 
                data-aos="fade-up" data-aos-duration= "2000"
            >
                In Collaboration With
            </h1>

            <div className="relative w-full mx-auto my-4" style={{ width: '80%' }}>
                <img
                    src={university}
                    alt="University"
                    className="w-full"
                    data-aos="slide-up"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                />
                
                {/* Button over the image */}
                <a href="/about" className="absolute bottom-10 left-16 transform -translate-x-1/2">
                    <button
                    className="border-2 border-sky-600 text-sky-600 bg-blue-100 py-2 px-6 rounded-full text-lg font-medium shadow-sm hover:bg-sky-800 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transform hover:scale-105"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="900"
                    >
                    About
                    </button>
                </a>
            </div>

            <h1 
                className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4"
                data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600"
            >
                NIILM UNIVERSITY
            </h1>

        </div>
    );
};

export default University;
