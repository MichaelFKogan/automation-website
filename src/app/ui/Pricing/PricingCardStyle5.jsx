import Button from '../Button';
import parse from 'html-react-parser';
import Icon from '../Icon';

export default function PricingCardStyle5({
  sectionTitle,
  sectionSubTitle1,
  sectionSubTitle2,
  sectionBtnUrl,
  sectionBtnText,
  title,
  subTitle,
  btnUrl,
  btnText,
  featureList,
}) {
  return (
    <div className="section-content">
      <div className="row g-gs justify-content-center">
        <div className="col-xl-11 col-xxl-10">
          <div className="shadow d-flex flex-wrap flex-lg-nowrap rounded-3 overflow-hidden">
            <div className="p-5 bg-white w-full w-lg-40">
              <div className="d-flex flex-column h-100">
                <h2>{sectionTitle}</h2>
                <p className="fs-6">{sectionSubTitle1}</p>
                <div className="pt-3">
                  <p className="fs-6">{sectionSubTitle2}</p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    btnText={sectionBtnText}
                    btnClass="btn btn-lg btn-primary"
                    href={sectionBtnUrl}
                  />
                </div>
              </div>
            </div>
            <div className="p-5 bg-primary is-dark w-full w-lg-60">
              <div className="d-flex flex-column h-100">
                <h2>{title}</h2>
                <p className="lead text-white">{subTitle}</p>
                <ul className="list list-row list-2col gy-3 text-white">
                  {featureList?.map((item, index) => (
                    <li key={index}>
                      <Icon icon="check-circle-fill" className="icon fs-4" />{' '}
                      <span>{parse(item)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button
                    btnText={btnText}
                    btnClass="btn btn-lg btn-light text-primary"
                    href={btnUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
