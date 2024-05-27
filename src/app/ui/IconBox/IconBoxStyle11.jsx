import Icon from '../Icon';

export default function IconBoxStyle11({ title, subTitle, iconClass }) {
  return (
    <div className="feature">
      <div className="feature-media">
        <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
          {/* <em className="icon ni ni-grid-plus" /> */}
          <Icon icon={iconClass} className="icon" />
        </div>
      </div>
      <div className="feature-text">
        <h4 className="title">{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
