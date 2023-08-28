export const Statistics = ({
  items = 0,
  countTotal = 0,
  countPositivFeedback = 0,
}) => {
  return (
    <div>
      <p>Good: {items.good}</p>
      <p>Neutral: {items.neutral}</p>
      <p>Bad: {items.bad}</p>
      <p>Total: {countTotal}</p>
      <p>Positive feedback: {countPositivFeedback} %</p>
    </div>
  );
};
