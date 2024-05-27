import Image from 'next/image';
import Button from '../Button';

export default function FeaturedCardStyle13({
  imgUrl,
  imgAlt,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <div className="section-content">
      <div className="row gx-gs gy-5 align-items-center flex-lg-row-reverse">
        <div className="col-xl-7 col-lg-7">
          <div className="block-gfx bg-opacity-10 ms-xl-3 rounded">
            <Image src={imgUrl} alt={imgAlt} placeholder="blur" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5">
          <div className="block-text">
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
