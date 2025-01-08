'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";
import Partners from './partners';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function UseCases() {
  return (
    <section className="px-5 bg-gradient-to-br from-[#3B82F6] to-white py-20 xl:px-20 xl:py-32" data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-4xl font-bold text-center py-5 xl:text-6xl">Let our work talk for us</h2>
      <h3 className="text-3xl text-center py-5 xl:text-4xl">Case Studies</h3>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <SwiperSlide key={index} className='pb-10 md:px-10'>
            <div className="flex flex-col gap-3 p-5">
              <Image
                src='/casestudy1.png'
                width={1000}
                height={1000}
                alt={`Case ${index}`}
                className="object-contain rounded-2xl"
              />
              <h4 className="text-2xl xl:text-3xl">Company {index}</h4>
              <h5 className="text-xl xl:text-2xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
              <button className="text-xl py-3 flex justify-center items-center gap-3 bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white rounded-md xl:text-2xl">
                Keep Reading
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Partners />
    </section>
  );
}