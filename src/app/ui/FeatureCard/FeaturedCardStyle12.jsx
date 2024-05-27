import Image from 'next/image';

export default function FeaturedCardStyle12({ imgUrl, imgAlt, featureList }) {
  return (
    <div className="section-content">
      <div className="row gx-gs gy-6 align-items-xl-center">
        <div className="col-xl-7 col-lg-7">
          <div className="block-gfx p-3 p-xl-4 bg-primary bg-opacity-10 me-xl-3 rounded">
            <Image
              className="rounded-4"
              src={imgUrl}
              alt={imgAlt}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5">
          <ul className="step-list">
            {featureList?.map((item, index) => (
              <li className="step-list-item" key={index}>
                <div className="step-list-icon">
                  <em className="icon ni ni-check" />
                </div>
                <div className="step-list-text">
                  <h6 className="overline-title text-primary">
                    Step {index + 1}
                  </h6>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.subTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
