import Icon from '../Icon';

export default function TestimonialStyle3({ text, avatarName, review }) {
  const numberArray = [];
  for (let i = 1; i <= review; i++) {
    numberArray.push(i);
  }
  return (
    <div className="text-center p-gs bg-white bg-opacity-10 rounded border border-white border-opacity-20">
      <ul className="list list-row g-0 mb-2">
        {numberArray.map(item => (
          <li key={item}>
            <Icon icon="star-fill" className="icon fs-5 text-warning" />
          </li>
        ))}
      </ul>
      <p>{text}</p>
      <h5 className="pt-2">- {avatarName}</h5>
    </div>
  );
}
