'use client';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Button from '../Button';
import parse from 'html-react-parser';
import IconBoxStyle9 from '@/app/ui/IconBox/IconBoxStyle9';
const featureData = [
  {
    title: 'Social Media Posts',
    subTitle:
      'Keep up the posting on your socials when you use automation to schedule your content for publication across all channels.',
    iconClass: 'instagram',
    iconBoxBgClass: 'text-bg-danger-soft-outline',
  },
  {
    title: 'Lead Generation',
    subTitle:
      'Drive high-quality leads by scheduling, managing, and rapidly distributing targeted social media content on multiple digital channels at once.',
    iconClass: 'bulb',
    iconBoxBgClass: 'text-bg-success-soft-outline',
  },
  {
    title: 'Customer Outreach',
    subTitle:
      'Improve your cash flow by automating the creation, distribution, and management of supplier and customer invoices.',
    iconClass: 'chat-circle',
    iconBoxBgClass: 'text-bg-info-soft-outline',
  },
  {
    title: 'Talent acquisition',
    subTitle:
      'Effectively manage your pipeline and place skilled candidates faster by automating the posting of roles on Facebook, Twitter, and LinkedIn.',
    iconClass: 'user-alt',
    iconBoxBgClass: 'text-bg-primary-soft-outline',
  },
  {
    title: 'Order Processing',
    subTitle:
      'Ship orders on time and easily enable online services by automating your end-to-end fulfillment processes.',
    iconClass: 'reports',
    iconBoxBgClass: 'text-bg-warning-soft-outline',
  },
  {
    title: 'Onboarding',
    subTitle:
      'Equip customers to easily get started with a comprehensive onboarding program that automates access control, distribution of resources, set-up of training, and more.',
    iconClass: 'cc-visa',
    iconBoxBgClass: 'text-bg-purple-soft-outline',
  },
];

export default function HeroStyle9({
  title,
  typingText,
  subTitle,
  href,
  btnText,
  alertText,
  thumbImg,
  brandTitle,
  brandSrcList,
  videoUrl = '/',
  videoIcon,
}) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setIframeSrc(videoUrl);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <section className="has-mask nk-header">
        <div className="nk-mask bg-line-b" />
        <div className="nk-hero pt-4 pt-lg-4 pt-xl-4">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="">
                <div className="px-xl-4 pb-5">

                  {/* TITLE, ANIMATION AND SUBTITLE */}
                  <h1 className="title mb-3 display-6 mb-lg-4">
                    {parse(title)}
                    <div className="text-gradient-primary">
                      <TypeAnimation
                        sequence={typingText}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </div>
                  </h1>
                  <p className="lead" style={{ maxWidth: "630px", margin: "auto" }}>{subTitle}</p>
                </div>

                {/* BUTTON CTA */}
                <ul className="btn-list btn-list-inline">
                  <li>
                    <Button
                      href={href}
                      btnClass="btn btn-primary btn-lg rounded-pill"
                      btnText={btnText}
                    />
                  </li>
                </ul>



                {/* <p className="sub-text mt-3">{alertText}</p> */}

                {/* VIDEO */}
                <div className="py-5">
              <div className="row justify-content-center">
                {/* <div className="col-xxl-10 responsive-video" style={{position: "relative", overflow: "hidden", maxWidth: "815px", paddingTop: "460px", borderRadius: "12px", boxShadow: "0px 4px 10px 0px rgba(63, 62, 237, 0.75)"}}> */}
                <div className="col-xxl-10 responsive-video" style={{position: "relative", overflow: "hidden", paddingLeft: "0px", paddingRight: "0px", maxWidth: "815px", borderRadius: "12px", boxShadow: "0px 4px 10px 0px rgba(63, 62, 237, 0.75)"}}>
                  {/* <iframe src="https://www.youtube.com/embed/B_ddkyRQh3c?si=CIItXK7B5DBP-26P" style={{position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width:"100%", height: "100%", border: "none"}} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                  <div style={{position: "relative", paddingBottom: "62.5%", height: "0"}}><iframe src="https://www.loom.com/embed/e5dfe5b22d3048c89d3a903042c2e64a?sid=53cdd22a-2c7f-4a08-86f6-b6ff9bb10d36" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
               </div>
              </div>
            </div>



                {/* GIF */}
                {/* <div className="p-2 mt-5 mx-xl-10 mx-lg-9" style={{width: "80%", margin: "auto", padding: "6px !important", borderRadius: "12px",background: "linear-gradient(var(--bs-bg-gradient-angle,267deg),RGBA(0,240,255,var(--bs-bg-opacity,1)) 4.01%,RGBA(82,0,255,var(--bs-bg-opacity,1)) 57.55%,RGBA(255,45,247,var(--bs-bg-opacity,1)) 114.97%)"}}> */}
                {/* <div className="p-2 mt-5 mx-xl-10 mx-lg-9" style={{width: "60%", margin: "auto", padding: "6px !important", borderRadius: "12px"}}>
                  <img src="/images/makeautomation.gif" alt="Make Automation Workflow Gif" style={{borderRadius: "12px"}}/>
                </div> */}



{/* INFO BOXES */}
<section className="section section-bottom-0 section-lg pt-5 mt-4">
      <div className="container">
      <div className="block-text">
        <h6 className={'overline-title text-info'}>Automate Everything</h6>
        <h2 className="title h1">Let <span className="text-gradient-">AI</span> Do The Work For You</h2>
      </div>
        <div className="section-content mt-6">
          <div className="nk-shape bg-shape-blur-m mt-12 start-50 translate-middle-x" style={{zIndex:"-1", top:"180px"}}></div>
            <div className="row g-gs">
              {featureData.map((item, index) => (
                <div className="col-md-6 col-xl-4" key={index}>
                  <IconBoxStyle9
                    title={item.title}
                    subTitle={item.subTitle}
                    iconClass={item.iconClass}
                    iconBoxBgClass={item.iconBoxBgClass}
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>  



              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
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
      </div> */}
    </>
  );
}
