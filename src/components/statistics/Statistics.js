export const Statistics = ({ items, countTotal, countPositivFeedback }) => {
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
