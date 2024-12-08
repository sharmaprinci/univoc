import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../partners/Partners.css';

const partners = [
  '/assets/adani.png',
  '/assets/ak.png',
  '/assets/caparo.png',
  '/assets/distil.png',
  '/assets/dixon.png',
  '/assets/epin.png',
  '/assets/global.png',
  '/assets/micro.png',
  '/assets/niilm.png',
  '/assets/nsdc.png',
  '/assets/padget.png',
  '/assets/subros.png',
];

const Partners = () => {
  return (
    <section className="partners-section py-10">
      <h3 className="partners-section-title text-4xl font-semibold text-center text-gray-800 mb-8">
        Our Trusted Partners
      </h3>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, pauseOnHover: true }}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="partners-slide">
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              className="partner-img object-contain p-4 rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
