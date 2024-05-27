import parse from 'html-react-parser';
import ImageCarousel from '../ImageCarousel';
import TestimonialStyle3 from '../Testimonial/TestimonialStyle3';

export default function HeroStyle8({
  title,
  subTitle,
  imageCarouselData,
  imageCarouselTitle,
}) {
  return (
    <section className="nk-header bg-darker is-dark has-mask">
      <div className="nk-mask bg-line-a" />
      <div className="nk-hero pt-6 pt-lg-8 pt-xl-12 pb-6 pb-lg-8 pb-xl-12">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xxl-10 col-xl-11">
              <h1 className="title display-6 mb-3 mb-lg-4">{parse(title)}</h1>
              <div className="px-xl-10 px-lg-8">
                <p className="lead">{parse(subTitle)}</p>
              </div>
              <div className="p-2 rounded mt-5 mx-xl-10 mx-lg-9">
                <form action="/index-s6">
                  <div className="inline-form-s1 rounded d-flex flex-wrap flex-md-nowrap p-2 is-light align-items-center">
                    <div className="w-100 w-md-auto  d-flex align-items-center flex-grow-1 ps-3 pb-2 pb-md-0">
                      <span className="flex-grow-0 pe-2">✏️</span>
                      <input
                        type="text"
                        className="form-control-plaintext is-light"
                        placeholder="Enter a description of what you want the AI to create"
                      />
                    </div>
                    <div className="w-100  w-md-auto flex-shrink-0">
                      <button className="btn btn-lg w-100 btn-primary">
                        Generate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ImageCarousel data={imageCarouselData} title={imageCarouselTitle} />
        <div className="container">
          <div className="row g-gs">
            <div className="col-lg-4 col-sm-6">
              <TestimonialStyle3
                text="Just input your prompt, select a style, and witness Copygen - the AI art generator - breathe life into your creative visions!"
                avatarName="Wade Warren"
                review={5}
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <TestimonialStyle3
                text="Just input your prompt, select a style, and witness Copygen - the AI art generator - breathe life into your creative visions!"
                avatarName="Dianne Russell"
                review={5}
              />
            </div>
            <div className="col-lg-4">
              <TestimonialStyle3
                text="Just input your prompt, select a style, and witness Copygen - the AI art generator - breathe life into your creative visions!"
                avatarName="Marvin McKinney"
                review={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
