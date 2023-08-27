import { FeedbackOptionsBtn } from 'components/feedbackOptionsBtn.js/FeedbackOptionsBtn';

export const FeedbackOptions = ({ options, onAddState }) => {
  return (
    <div>
      <ul>
        {options.map(item => (
          <li key={item}>
            <FeedbackOptionsBtn btnName={item} btnState={onAddState} />
          </li>
        ))}
      </ul>
      {/* <button>Hello</button> */}
      {/* <button onClick={() => onGood()}>Good</button>
      <button onClick={() => onNeutral()}>Neutral</button>
      <button onClick={() => onBad()}>Bad</button> */}
    </div>
  );
};
