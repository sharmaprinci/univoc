import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo3-removebg-preview.png';

const Footer = () => {
    return (
        <>
            <footer className="py-6 px-4 bg-blue-100">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">
                
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Univoc Logo" className="w-24 mb-2" />
                    <p className="text-black font-semibold">Empowering Solutions for Tomorrow</p>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
                    <ul>
                        <li><a href="/about" className="text-black hover:text-blue-400">About Us</a></li>
                        <li><a href="/services" className="text-black hover:text-blue-400">Services</a></li>
                        <li><a href="/contact" className="text-black hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold mb-2 text-black">Contact Us</h4>
                    <p className="text-black"><FontAwesomeIcon icon="phone-alt" className="mr-2" /> +123 456 7890</p>
                    <p className="text-black"><FontAwesomeIcon icon="envelope" className="mr-2" /> univoctech@gmail.com</p>
                    <p className="text-black"><FontAwesomeIcon icon="map-marker-alt" className="mr-2" /> Noida, Delhi, India</p>
                </div>
                
                {/* Social Media Links */}
                <div>
                    <h4 className="font-semibold mb-2 text-black">Connect with Us</h4>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com" className="text-black hover:text-sky-600 text-2xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" className="text-black hover:text-sky-600 text-2xl">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com" className="text-black hover:text-sky-600 text-2xl">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" className="text-black hover:text-sky-600 text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Our Team Section */}
                <div>
                    <h4 className="font-semibold mb-2 text-black">Our Team</h4>
                    <p className="text-black">Meet the dedicated team behind Univoc’s success. <a href="/team" className="text-blue-700 hover:underline">Learn more</a></p>
                </div>
            </div>

           
        </footer>
         {/* Footer Bottom Section */}
         <div className="bg-sky-800 py-3 text-center text-white p-0">
                <p>&copy; 2024 Univoc. All Rights Reserved | <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms of Service</a></p>
            </div>
        </>
    );
};

export default Footer;
