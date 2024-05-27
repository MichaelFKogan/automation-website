import Image from 'next/image';
import Icon from '../Icon';

export default function TestimonialStyle4({
  avatarImgUrl,
  avatarName,
  avatarDesignation,
  title,
  subTitle,
  review,
}) {
  const numberArray = [];
  for (let i = 1; i <= review; i++) {
    numberArray.push(i);
  }
  return (
    <div className="card rounded-4 border-0 h-100 shadow-sm">
      <div className="card-body flex-grow-0">
        <div className="d-flex align-items-center">
          <div className="media media-xl media-middle rounded-pill">
            <Image src={avatarImgUrl} alt="Avatar" height={60} width={60} />
          </div>
          <div className="media-info ms-3">
            <h5 className="mb-1">{avatarName}</h5>
            <div className="sub-text">{avatarDesignation}</div>
          </div>
        </div>
      </div>
      <div className="card-body bg-black bg-opacity-20 py-3 flex-grow-0 quote-s2">
        <div className="quote-icon" />
        <blockquote>{title}</blockquote>
      </div>
      <div className="card-body d-flex flex-column h-100">
        <div className="mb-auto">
          <p>{subTitle}</p>
        </div>
        <ul className="list list-row g-0 mt-2">
          {numberArray.map(item => (
            <li key={item}>
              <Icon icon="star-fill" className="icon fs-5 text-warning" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
