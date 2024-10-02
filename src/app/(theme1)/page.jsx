

import CtaStyle5 from '@/app/ui/Cta/CtaStyle5';
import SectionHeading from '@/app/ui/SectionHeading';
import TestimonialSlider from '@/app/ui/TestimonialSlider';
import Accordion from '@/app/ui/Accordion';
import PricingSectionStyle2 from '@/app/ui/Pricing/PricingSectionStyle2';
import CardStyle2 from '@/app/ui/Card/CardStyle2';
import CardStyle5 from '@/app/ui/Card/CardStyle5';
import FeaturedCardStyle14 from '@/app/ui/FeatureCard/FeaturedCardStyle14';

// import ctaImg from '../../../public/images/gfx/cta-a.jpg';
// import featureCardImg from '../../../public/images/ai-video/gfx/c.jpg';
// import featureCardImg2 from '../../../public/images/ai-video/gfx/b.jpg';

import featureCardImg3 from '../../../public/images/make.png';
// import heroImg from '../../../public/images/ai-video/cover.jpg';
import IconBoxStyle3 from '@/app/ui/IconBox/IconBoxStyle3';
import IconBoxStyle6 from '@/app/ui/IconBox/IconBoxStyle6';
import FeaturedCardStyle16 from '@/app/ui/FeatureCard/FeaturedCardStyle16';
import HeroStyle9 from '@/app/ui/Hero/HeroStyle9';
import SectionHeadingStyle2 from '@/app/ui/SectionHeading/SectionHeadingStyle2';
import VideoCarousel from '@/app/ui/VideoCarousel';
import IconBoxStyle9 from '@/app/ui/IconBox/IconBoxStyle9';
import ChatAssistant from '@/app/ui/ChatGPT/ChatAssistant';

const accordionData = [
  {
    question: 'What is a copy?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Does CopyGen to write long articles?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Is the generated content original?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
  {
    question: 'Do you have wordpress plugin?',
    answer:
      "Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!",
  },
];

export const metadata = {
  title: '',
};

export default function Home7() {
  return (
    <>
      <HeroStyle9
        id="home"
        title="Automate Your Business"
        typingText={[
          'AI Assistants',
          1000,
          'Lead Generation',
          1000,
          'Order Processing',
          1000,
          'Invoice Creation',
          1000,
        ]}
        subTitle="Streamline your processes, boost productivity, and lower costs. Discover the power of automation for your business."
        href="https://calendly.com/mikekogan-automation"
        btnText="Book A Call"
        videoUrl="https://www.youtube.com/embed/SSo_EIwHSd4"
        videoIcon="/images/icon/play.svg"
      />
 

{/* CASE STUDIES */}

<section id="usecases"  className="section section-bottom-0 section-lg pt-5 mt-8">
        <div className="container">

        <SectionHeading
            overlineTitle="What Can Automation Do?"
            overlineTitleVariant="text-tertiary"
            title="Use Cases"
            // subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
            containerWidthClass="col-lg-9 col-xl-8 col-xxl-7"
          />

          <FeaturedCardStyle14
            imgAlt="Feature Thumb"
            title="Automate posting from Blog to Social Media with ChatGPT"
            subTitle="Post on social media from your blog using ChatGPT - a powerful AI tool that streamlines content sharing, increases engagement, and enhances your online presence effortlessly."
            btnText="Turn your idea into a video"
            btnUrl="/index-s7"
            colReverse
          />
          </div>
      </section>




      <section className="section section-bottom-0 section-lg pt-8">
        <div className="container">
          <FeaturedCardStyle14
            imgAlt="Feature Thumb"
            title="Produce engaging & concise product videos"
            subTitle="Creating great content can be time-consuming. But with Simplified, you can easily create high-quality content in less time. With our all-in-one marketing platform, you can efficiently manage all your content in one place—from planning and writing, to publishing and promoting."
            btnText="Turn your idea into a video"
            btnUrl="/index-s7"
            featureList2={[
              { iconClass: 'bar-chart-fill', title: 'Realistic AI Voiceovers' },
              { iconClass: 'browser-fill', title: 'Multiple aspect ratios' },
              { iconClass: 'opt-alt-fill', title: 'Auto Image Selection' },
              { iconClass: 'grid-fill-c', title: 'Customize Tone' },
            ]}
          />
        </div>
      </section>

    {/* AI CHAT BOT */}
      {/* <section id="aichatbot" className="section section-bottom-0 section-lg pt-8">
        <div className="container">
          <SectionHeading
                overlineTitle="ChatGPT Pre-Trained Assistant"
                overlineTitleVariant="text-tertiary"
                title="AI Chat Bot"
                // subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
                containerWidthClass="col-lg-9 col-xl-8 col-xxl-7"
              />
        </div>

          <ChatAssistant assistantId="asst_27ZcNLI5sjrltjfGTiBs9L3s" />

      </section> */}
    {/* AI CHAT BOT */}


{/* 3 COLUMN INFO TABS */}

{/*
      <section id="roadmap" className="section section-bottom-0 section-lg pt-0">
      {/* <div className="nk-shape bg-shape-blur-m mt-12 start-50 top-0 translate-middle-x"></div> */}
      {/* <div className="nk-mask bg-pattern-dot bg-blend-around mt-5 mb-10p mh-50vh"></div> */}
{/*      
      <div className="nk-mask bg-pattern-dot-sm bg-blend-around"></div>
        <div className="container">


          <SectionHeading
            overlineTitle="How Automation Can Help You"
            overlineTitleVariant="text-tertiary"
            title="AUTOMATE EVERYTHING"
            // subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
            containerWidthClass="col-lg-9 col-xl-8 col-xxl-7"
          />

          <div className="section-content">
            <div className="row g-gs">
            <div className="col-md-6 col-xl-4">
                <IconBoxStyle3
                  title="Automate repetetive tasks"
                  subTitle="You do not need to spend hours to write good content — let our advance AI Writer to get it done."
                  iconClass="spark"
                  variant="text-indigo bg-indigo"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle3
                  title="Save you time"
                  subTitle="Using our AI tools and pre-built template to create content briefs, write and optimize content in one place."
                  iconClass="speed"
                  variant="text-primary bg-primary"
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <IconBoxStyle3
                  title="Scale your business"
                  subTitle="Use our advanced AI as your personal content writer or partner for your endless work for your business."
                  iconClass="text2"
                  variant="text-info bg-info"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
          */}
{/* END 3 COLUMN INFO TABS */}


{/* ROADMAP */}
  <section id="roadmap" className="section section-bottom-0 section-lg pt-0">
      {/* <div className="nk-shape bg-shape-blur-m mt-12 start-50 top-0 translate-middle-x"></div> */}
      {/* <div className="nk-mask bg-pattern-dot bg-blend-around mt-5 mb-10p mh-50vh"></div> */}
      <div className="nk-mask bg-pattern-dot-sm bg-blend-around"></div>
        <div className="container">
          <SectionHeading
            overlineTitle="HOW IT WORKS"
            overlineTitleVariant="text-tertiary"
            title="Project Roadmap"
            // subTitle="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
            containerWidthClass="col-lg-9 col-xl-8 col-xxl-7 mt-6"
          />

          <FeaturedCardStyle16
            imgUrl={featureCardImg3}
            imgAlt="Features"
            featureList={[
              {
                title: 'Discovery and Strategy',
                subTitle:
                  "Begin your automation journey with us through a comprehensive consultation. ",
              },
              {
                title: 'Tailored Proposal',
                subTitle:
                  "Based on our initial discussion, we'll craft a customized proposal that outlines the project scope, estimated timeline, and a clear roadmap.",
              },
              {
                title: 'Design and Development',
                subTitle:
                  'We get to work, designing and developing your bespoke automation solution.',
              },
              {
                title: 'Launch and Support',
                subTitle:
                  'As your automation solutions go live, we stand by your side, offering ongoing support to address any challenges and ensure smooth operation.',
              },
            ]}
          />
        </div>
      </section>
{/* END ROADMAP */}


{/* VIDEO CAROUSEL */}
      {/* <section className="section section-bottom-0 section-lg has-shape">
        <div className="nk-shape bg-shape-border-g start-50 mt-9 top-0 translate-middle-x" />
        <div className="container">
          <SectionHeadingStyle2
            title="Turn presentations, prompts-or text into AI videos in minutes"
            variant="h2 mb-5"
            containerWidthClass="col-lg-9 col-xl-8 col-xxl-7"
            btnUrl="/login"
            btnText="Create your free video"
            btnClass="btn btn-primary btn-lg rounded-pill"
          />
          <VideoCarousel />
        </div>
      </section> */}
{/* END VIDEO CAROUSEL */}





{/* PRICING */}
      <section id="pricing" className="section section-bottom-0 section-lg">
        <div className="container">
          <SectionHeading
            overlineTitle="Pricing"
            overlineTitleVariant="text-tertiary"
            title="Plans that fit your needs"
            subTitle="With our simple plans that can streamline your business processes. <br>Let’s make great content together."
            containerWidthClass="col-lg-9 col-xl-8 col-xxl-8"
          />
          <PricingSectionStyle2 variant2 />
        </div>
      </section>
{/* END PRICING */}


{/* FAQ */}
      {/* <section className="section section-bottom-0 section-lg has-mask">
        <div className="nk-mask bg-pattern-noise-b" />
        <div className="container">
          <SectionHeading
            overlineTitle="FAQs"
            overlineTitleVariant="text-tertiary"
            title="Questions & Answers"
            subTitle="This is a straightforward and commonly used header that lets customers know they are looking at different pricing options."
          />
          <Accordion
            data={accordionData}
            variant="accordion-separated"
            accordionItemVariant="border-0 bg-gradient-light"
          />
        </div>
      </section> */}
{/* END FAQ */}


{/* TESTIMONIAL SLIDER */}
      {/* <section className="section section-bottom-0 section-lg overflow-y-visible">
        <div className="container">
          <SectionHeading
            overlineTitle="Testimonials"
            overlineTitleVariant="text-tertiary"
            title="See what our clients say"
            subTitle="With our simple plans, supercharge your content writing to helps your business. Let’s make great content together."
          />
          <TestimonialSlider />
        </div>
      </section> */}
{/* END TESTIMONIAL SLIDER */}



{/* CONTACT US FORM */}
      <section id="contact-us" className="section section-bottom-0 has-shape has-mask">
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
        <div className="container">
          <div className="section-head">
            <div className="row justify-content-center text-center">
              <div className="col-lg-11 col-xl-10 col-xxl-9">
                <h6 className="overline-title text-info">Contact us</h6>
                <h1 className="title">
                  What can we help you <span className="text-gradient-primary">automate</span>?
                </h1>
                <h2>
                  Begin your journey below!
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row g-gs justify-content-center justify-content-lg-between">
              <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                <div className="block-text pt-lg-4">
                  <h3 className="title h2">{`Let's talk`}</h3>
                  {/* <p>
                    Must explain to you how all this mistaken idea of denouncing
                    pleasure and praising born and I will give you a complete
                    account of the system.
                  </p> */}
                  <ul className="row gy-4 pt-4">
                    {/* <li className="col-12">
                      <CardStyle5
                        title="Contact"
                        subTitle="+(642) 342 762 44"
                        iconClass="call-alt-fill"
                      />
                    </li> */}
                    <li className="col-12">
                      <CardStyle5
                        title="Book A Call"
                        // subTitle="https://calendly.com/mikekogan-automation"
                        iconClass="call-alt-fill"
                      />
                      <a href="https://calendly.com/mikekogan-automation" target="_blank">Calendly</a>
                    </li>
                    <li className="col-12">
                      <CardStyle5
                        title="Email"
                        subTitle="support@copygen.com"
                        iconClass="mail-fill"
                      />
                    </li>
                    <li className="col-12">
                      <CardStyle5
                        title="Office"
                        subTitle="New York City"
                        iconClass="map-pin-fill"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <h3 className="title fw-medium mb-4">
                      Please feel free to contact us using form below
                    </h3>
                    
                    
                    <div style={{position: "relative", width: "100%", height: "0", paddingBottom: "150%"}}>
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd4dFdCNl6oi6Nj-rf4zBkZItXPOLBy63aHirPwoDD03KpXRw/viewform?embedded=true" 
                        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border:"0"}}
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0">Loading…
                      </iframe>
                    </div>
                    
                    
                    
                    
                    {/* <form className="form-submit-init">
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="form-group">
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                name="user-name"
                                className="form-control form-control-lg"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="form-control-wrap">
                              <input
                                type="email"
                                name="user-email"
                                className="form-control form-control-lg"
                                placeholder="Your Email Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="form-control-wrap">
                              <input
                                type="text"
                                name="user-subject"
                                className="form-control form-control-lg"
                                placeholder="Subject"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="form-control-wrap">
                              <textarea
                                name="user-message"
                                className="form-control form-control-lg"
                                placeholder="Enter your message"
                                required
                                defaultValue={''}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="form-control-wrap">
                              <textarea
                                name="user-message"
                                className="form-control form-control-lg"
                                placeholder="What are some of the main pain points in your business?"
                                required
                                defaultValue={''}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button
                              className="btn btn-primary"
                              type="submit"
                              id="submit-btn"
                            >
                              Send Message
                            </button>
                          </div>
                          <div className="form-result mt-4" />
                        </div>
                      </div>
                    </form> */}




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* END CONTACT US FORM */}



{/* ABOUT ME */}
      <section className="section section-bottom-0 section-lg">
        <div className="container">
      <TestimonialSlider />
      </div>
      </section>
{/* END ABOUT ME */}



    </>
  );
}
