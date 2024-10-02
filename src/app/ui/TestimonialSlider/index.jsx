'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Icon from '../Icon';
const data = [
  {
    text: "After working as a Software Engineer for the last 8 years,  I've witnessed firsthand how AI and No-Code Automation can transform the way businesses operate. From streamlining workflows to increasing productivity, the combination of these technologies has immense potential to drive innovation and efficiency. My passion lies in leveraging these tools to help businesses automate processes, reduce manual tasks, and focus on growth. In my free time, I enjoy experimenting with new technologies and building my own web apps. I’m always exploring creative ways to solve problems through automation and AI.",
    avatarImgUrl: '/images/avatar/testimonials/profile.png',
    avatarName: 'Mike Kogan',
    avatarDesignation: 'Founder',
  },
  {
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti provident, similique sunt in culpa qui officia deserunt mollitia animi',
    avatarImgUrl: '/images/avatar/testimonials/md-b.jpg',
    avatarName: 'Frances Burns',
    avatarDesignation: 'Writer, Envato Elements',
  },
];

export default function TestimonialSlider() {
  return (
    <>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="position-relative">
            <ul className="swiper-button-wrap btn-list btn-list-inline gx-3 bottom-0 end-0 pb-md-5 pe-md-5 position-absolute">
              <li>
                <div className="slider-prev btn btn-sm btn-icon btn-outline-primary rounded-pill">
                  <Icon icon="arrow-long-left" className="icon" />
                </div>
              </li>
              <li>
                <div className="slider-next btn btn-sm btn-icon btn-outline-primary rounded-pill">
                  <Icon icon="arrow-long-right" className="icon" />
                </div>
              </li>
            </ul>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: '.slider-next',
                prevEl: '.slider-prev',
                disabledClass: 'swiper-disabled',
              }}
              className="mySwiper"
            >
              {data.slice(0, 1).map((item, index) => (
                // <SwiperSlide key={index}>
                  <div className="row align-items-center gx-4 gx-lg-5 gx-xl-6">
                    <div className="col-md-4 col-sm-6 col-8">
                      <div className="bg-gradient-primary rounded-3 p-2 bg-opacity-30">
                        <Image
                          src={item.avatarImgUrl}
                          width={540}
                          height={580}
                          alt="Avatar"
                        />
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="py-md-3 pt-3">
                        <blockquote className="blockquote">
                          {item.text}
                        </blockquote>
                        <div className="block-info pt-lg-4">
                          <h4 className="title">{item.avatarName}</h4>
                          <div className="caption-text">
                            {item.avatarDesignation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                // </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
