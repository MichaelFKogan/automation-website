'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const data = [
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/SSo_EIwHSd4',
    title: 'Product Marketing Templates',
  },
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/ZE2HxTmxfrI',
    title: 'Product Marketing Templates',
  },
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/OcmvMs4AMbM',
    title: 'Product Marketing Templates',
  },
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/SSo_EIwHSd4',
    title: 'Product Marketing Templates',
  },
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/ZE2HxTmxfrI',
    title: 'Product Marketing Templates',
  },
  {
    imgUrl: '/images/workflow.gif',
    videoUrl: 'https://www.youtube.com/embed/OcmvMs4AMbM',
    title: 'Product Marketing Templates',
  },
];

export default function VideoCarousel() {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = url => {
    setIframeSrc(url);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <div className="overflow-hidden">
        <div className="video-carousel">
          <Swiper
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={24}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              767: {
                spaceBetween: 24,
              },
              200: {
                spaceBetween: 10,
              },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} style={{ width: '300px' }}>
                <div className="block-gfx rounded-4 overflow-hidden">
                  <img className="rounded-4" src={item.imgUrl} alt="Thumb" />
                  <span
                    className="glightbox position-absolute w-4rem h-4rem start-50 top-50 translate-middle"
                    onClick={() => handelClick(item.videoUrl)}
                  >
                    <img
                      className="h-100 w-100"
                      src="/images/icon/play.svg"
                      alt=""
                    />
                  </span>
                </div>
                <span className="glightbox d-flex align-items-center mt-4">
                  <h4
                    className="me-3 mb-0 line-clamp-1"
                    onClick={() => handelClick(item.videoUrl)}
                  >
                    {item.title}
                  </h4>{' '}
                  <em className="fs-3 text-tertiary ni ni-arrow-long-right" />
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <div className="cs-video_popup_overlay" />
        <div className="cs-video_popup_content">
          <div className="cs-video_popup_layer" />
          <div className="cs-video_popup_container">
            <div className="cs-video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </div>
            </div>
            <div className="cs-video_popup_close" onClick={handelClose} />
          </div>
        </div>
      </div>
    </>
  );
}
