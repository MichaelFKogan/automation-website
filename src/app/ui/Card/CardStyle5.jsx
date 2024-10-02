import Icon from '../Icon';

export default function CardStyle5({ title, subTitle, iconClass }) {
  return (
    <>
      <h5 className='d-flex align-items-center'>
      <Icon
          icon={iconClass}
          className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2"
        />
        {title}</h5>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
        <span>{subTitle}</span>
      </div>
    </>
  );
}
