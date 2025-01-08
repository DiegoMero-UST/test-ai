'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Partners() {
  // Array of company names for alt text
  const companies = [
    'Microsoft',
    'Amazon',
    'Google',
    'IBM',
    'Oracle',
    'Salesforce',
    'Adobe',
    'SAP',
    'Cisco',
    'Intel'
  ];

  return (
    <section className="pb-20 pt-20 xl:py-48 xl:flex xl:flex-col xl:gap-10">
      <h2 className="text-4xl text-center mb-16 xl:text-6xl" >Our Partners</h2>
      
      <div className="px-10 md:px-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="max-w-7xl mx-auto"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <Image
                src="/partners.png"
                alt={`${company} logo`}
                width={200}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
