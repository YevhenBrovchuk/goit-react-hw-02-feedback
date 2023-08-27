export const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// import { Component } from 'react';

// import { Notification } from 'components/notification/Notification';
// export class Section extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   addNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   addBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     console.log(this.state.good);
//     console.log(this.countTotalFeedback());
//     return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <FeedbackOptions
//           onGood={this.addGood}
//           onNeutral={this.addNeutral}
//           onBad={this.addBad}
//         />
//         <h2>Statistica</h2>
//         <Statistics
//           countGood={this.state.good}
//           countNeutral={this.state.neutral}
//           countBad={this.state.bad}
//           countTotal={this.countTotalFeedback()}
//           countFeedback = { this.countPositiveFeedbackPercentage() }
//         />
//       </div>
//     );
//   }
// }
