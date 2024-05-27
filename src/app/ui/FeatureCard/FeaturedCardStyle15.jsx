import Button from '../Button';

export default function FeaturedCardStyle15({
  title,
  subTitle,
  btnText,
  btnUrl,
  quote,
  quoteAvatar,
}) {
  return (
    <div className="section-content">
      <div className="row gx-gs gy-5 align-items-center justify-content-between">
        <div className="col-lg-6 col-xl-5">
          <div className="quote">
            <div className="quote-icon" />
            <blockquote>{quote}</blockquote>
            <h4>- {quoteAvatar}</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="block-text ms-lg-4 ms-xl-0">
            <h2 className="title">{title}</h2>
            <p>{subTitle}</p>
            <Button
              btnText={btnText}
              btnClass="btn btn-lg btn-primary mt-4"
              href={btnUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
