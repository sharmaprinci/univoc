import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../testimonials/Testimonials.css';

const testimonials = [
  {
    img: "/assets/tutor1.jpeg",
    name: "Rajeev Sharma",
    title: "Science Tutor, Noida",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor2.jpeg",
    name: "Ishita Dubey",
    title: "English Tutor, Chandigarh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor3.jpeg",
    name: "Prakash Gupta",
    title: "Hindi Tutor, Panchkula",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor4.jpeg",
    name: "Sakshi Verma",
    title: "Hindi Tutor,Zirkpur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor5.jpeg",
    name: "Abhishek Singh",
    title: "Social Science Tutor, Mohali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor6.jpeg",
    name: "Archi Gurjar",
    title: "Science Tutor, Chandigarh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor7.jpeg",
    name: "Saurabh Bhardwaj",
    title: "English Tutor, Panchkula",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
  {
    img: "/assets/tutor8.jpeg",
    name: "Deepika Mishr",
    title: "Hindi Tutor, Zirkpur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error inventore tempora aperiam cum vitae voluptatem harum, id assumenda distinctio sed nostrum blanditiis fugit ab in nobis nulla optio eius."
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h3 className="testimonial-section-title-h3">What Our Clients Say</h3>
      <Swiper
  loop={true}
  centeredSlides={true} 
  slidesPerView= "auto"
  spaceBetween={20}
  autoplay={{ delay: 3000, pauseOnHover: true }}
  effect="coverflow"
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  }}
  grabCursor={true}
  modules={[Autoplay]}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
>

        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-card-body">
                <div className="testimonial-image">
                  <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                  <span className="testimonial-caption">
                    <div className="testimonial-name">
                      <h3 className="testimonial-title-h3">{testimonial.name}</h3>
                      <p className="testimonial-title-p">{testimonial.title}</p>
                    </div>
                  </span>
                </div>
                <img src="assets/testimonial.png" alt="testimonial icon" className="testimonial-icon" />
              </div>
              <p className="testimonial-p">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
