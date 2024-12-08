import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about-page/AboutPage";
import About from "./components/about/About";
import BenefitDetail from "./components/benefitDetail/BenefitDetail.js";
import Contact from "./components/contact/Contact";
import EmployerSection from "./components/employer/EmployerSection";
import Footer from "./components/footer/Footer.js";
import HomeSection from "./components/HomeSection.jsx";
import Job from "./components/job-portal/Job";
import Login from "./components/login/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Opportunities from "./components/oppotrunities/Opportunities";
import Partners from "./components/partners/Partners";
import Register from "./components/register/Register.jsx";
import Testimonials from "./components/testimonials/Testimonials.js";
import './index.css';

function AppContent() {
  return (
    <Routes>
      {/* Route for HomeSection and additional content */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomeSection />
            <Job />
            <Opportunities />
            <About />
            <EmployerSection />
            <Partners />
            <Testimonials />
            <Footer />
          </>
        }
      />
      {/* Other Routes */}
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/benefit/:id" element={<BenefitDetail />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
