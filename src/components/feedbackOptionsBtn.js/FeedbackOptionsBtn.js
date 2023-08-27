export const FeedbackOptionsBtn = ({ btnName, btnState }) => {
  return <button onClick={() => btnState(btnName)}>{btnName}</button>;
};
