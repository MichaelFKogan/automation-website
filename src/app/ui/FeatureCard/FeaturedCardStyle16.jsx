import Image from 'next/image';

export default function FeaturedCardStyle16({ imgUrl, imgAlt, featureList }) {
  return (
    <div className="section-content">
      <div className="row gx-gs gy-6 align-items-xl-center">
        <div className="col-xl-7 col-lg-7">
          <div className="block-gfx pe-xl-4">
            <Image
              className="rounded-4"
              src={imgUrl}
              alt={imgAlt}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-xl-5 col-lg-5">

        {/* <ul className="step-list">
          <li className="step-list-item">
            <div className="step-list-icon">
              <em className="icon ni ni-check"></em>
            </div>
            <div className="step-list-text">
              <h6 className="overline-title text-primary">Step 1</h6>
              <h3 className="title">Open Copygen image generate</h3>
              <p>Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.</p>
            </div>
            </li>
            <li className="step-list-item"><div className="step-list-icon"><em className="icon ni ni-check"></em></div><div className="step-list-text"><h6 className="overline-title text-primary">Step 2</h6><h3 className="title">Feed in your prompt</h3><p>Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.</p></div></li><li className="step-list-item"><div className="step-list-icon"><em className="icon ni ni-check"></em></div><div className="step-list-text"><h6 className="overline-title text-primary">Step 3</h6><h3 className="title">Choose your image style</h3><p>Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.</p></div></li><li className="step-list-item"><div className="step-list-icon"><em className="icon ni ni-check"></em></div><div className="step-list-text"><h6 className="overline-title text-primary">Step 4</h6><h3 className="title">Create your image</h3><p>Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.</p></div></li>
        </ul> */}

          <ul className="gap gy-gs step-list">
            {featureList?.map((item, index) => (

              <li className="step-list-item mt-0" key={index}>
                <div className="step-list-icon">
                  <em className="icon ni ni-check"></em>
                </div>
                <div className="step-list-text">
                <h6 className="overline-title text-tertiary">
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
