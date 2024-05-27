'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function ImageCarousel({ data, title }) {
  return (
    <div className="text-center pt-6 pt-lg-8 pt-xl-12 pb-6 pb-lg-8 pb-xl-12">
      <h5 className="fw-medium pb-3">{title}</h5>
      <Swiper
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={16}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} style={{ width: '300px' }}>
            <div className="swiper-slide">
              <Image
                className="rounded"
                src={item.imgUrl}
                alt={item.altText}
                height={320}
                width={320}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
