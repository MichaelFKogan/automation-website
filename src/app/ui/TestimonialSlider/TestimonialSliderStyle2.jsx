'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialStyle4 from '../Testimonial/TestimonialStyle4';
const data = [
  {
    avatarImgUrl: '/images/avatar/author/sm-q.jpg',
    avatarName: 'John Doe',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'We’re building a better application now, thanks to Copygen.',
    subTitle: `I want to take a moment to wholeheartedly recommend Copygen. In my experience, they've proven to be a top-tier agency that truly excels in their field. Here are a few key reasons why I endorse them`,
    review: '5',
  },
  {
    avatarImgUrl: '/images/avatar/author/sm-r.jpg',
    avatarName: 'Sophia Miller',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Great Service from a expert support system of Copygen.',
    subTitle:
      'At the heart of our service lies an extraordinary support team. They are not just agents; they are advocates for your success. Our support goes beyond resolving issues.',
    review: '5',
  },
  {
    avatarImgUrl: '/images/avatar/author/sm-s.jpg',
    avatarName: 'Alice Smith',
    avatarDesignation: 'CEO at Hire & Retain',
    title: 'Pricing is amazing for the small businesses around the world.',
    subTitle: `Certainly! To provide more targeted content, I'll need a bit more context. Additionally, if you could provide some details about the industry or field it's related to, that would be helpful as well.`,
    review: '5',
  },
];

export default function TestimonialSliderStyle2() {
  return (
    <Swiper
      speed={1000}
      loop={true}
      slidesPerView={3}
      spaceBetween={32}
      className="testimonial-slider-2"
      breakpoints={{
        1199: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index} className="h-auto">
          <TestimonialStyle4 {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
