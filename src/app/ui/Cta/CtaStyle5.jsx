import Image from 'next/image';
import Button from '../Button';

export default function CtaStyle5({
  title,
  subtitle,
  btnUrl,
  btnText,
  imgUrl,
}) {
  return (
    <div className="section-wrap card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="section-content p-4 p-sm-5 p-xl-6">
        <div className="row justify-content-between align-items-center flex-lg-row-reverse g-4 g-lg-5">
          <div className="col-xl-5 col-lg-6">
            <div className="block-gfx">
              <Image
                className="w-100 rounded-3 shadow-sm"
                src={imgUrl}
                alt="Thumbnail"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="block-text">
              <h2 className="title">{title}</h2>
              <p className="fs-5">{subtitle}</p>
              <ul className="btn-list btn-list-inline gy-0">
                <li>
                  <Button
                    href={btnUrl}
                    btnClass="btn btn-lg btn-primary rounded-pill"
                    btnText={btnText}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
