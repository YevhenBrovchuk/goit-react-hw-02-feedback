import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addState = nameBtn => {
    this.setState(prevState => ({
      [nameBtn]: prevState[nameBtn] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onAddState={this.addState}
          />
          <h3>Statistics</h3>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              items={this.state}
              countTotal={this.countTotalFeedback()}
              countPositivFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
