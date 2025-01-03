'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UseCases() {
  return (
    <section>
      <h2>Let our work talk for us</h2>
      <h3>Case Studies</h3>
      <Swiper
        modules={[Navigation, Pagination]}
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
            <div className="flex flex-col gap-3">
              <Image
                src='/casestudy1.png'
                width={400}
                height={200}
                alt={`Case ${index}`}
              />
              <h4 className="text-2xl">Company {index}</h4>
              <h5 className="text-xl">Optimizing the Loan Approval Process for a Financial Institution</h5>
              <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
                Keep Reading
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}