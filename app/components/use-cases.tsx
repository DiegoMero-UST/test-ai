'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function UseCases() {
  return (
    <section className="px-5 bg-[#E5E5E5] py-20">
      <h2 className="text-4xl font-bold text-center py-5">Let our work talk for us</h2>
      <h3 className="text-3xl text-center py-5">Case Studies</h3>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-3 p-5 border-2 border-[#000] rounded-md">
              <Image
                src='/casestudy1.png'
                width={1000}
                height={1000}
                alt={`Case ${index}`}
                className="object-contain"
              />
              <h4 className="text-2xl">Company {index}</h4>
              <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
              <button className="text-xl py-3 flex justify-center items-center gap-3 bg-blue-500 text-white rounded-md">
                Keep Reading
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
}