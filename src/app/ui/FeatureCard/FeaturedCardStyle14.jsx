import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import Icon from '../Icon';

export default function FeaturedCardStyle14({
  imgUrl,
  imgAlt,
  title,
  subTitle,
  featureList,
  featureList2,
  btnText,
  btnUrl,
  colReverse,
}) {
  return (
    <div className="section-content">
      <div
        className={`row gx-gs gy-5 align-items-center ${
          colReverse ? 'flex-lg-row-reverse' : ''
        }`}
      >
        <div className="col-lg-6">
          <div className="block-gfx bg-opacity-10 rounded">
            {/* <Image src=""{imgUrl}"" alt={imgAlt} placeholder="blur" /> */}
            <img src="/images/workflow.gif" alt="Make Automation Workflow Gif" style={{borderRadius: "12px"}}/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={`block-text ${colReverse ? 'me-xl-10' : 'ms-xl-10'}`}>
            <h2 className="title">{title}</h2>
            <p>{subTitle}</p>
            {featureList &&
              featureList?.map((item, index) => (
                <React.Fragment key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.subTitle}</p>
                </React.Fragment>
              ))}
            {featureList2 && (
              <ul className="list list-row list-2col gy-3 mb-2">
                {featureList2?.map((item, index) => (
                  <li className="align-items-center" key={index}>
                    <div className="media media-middle media-md bg-cyan bg-opacity-10 text-tertiary rounded-pill">
                      <Icon icon={item.iconClass} className="icon fs-6" />
                    </div>
                    <span className="ms-3">{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* <Button
              btnText={btnText}
              btnClass="btn btn-lg btn-primary mt-4"
              href={btnUrl}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
