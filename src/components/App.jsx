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
    const nameSatetKey = Object.keys(this.state).filter(key => key === nameBtn);
    this.setState(prevState => ({
      [nameSatetKey]: prevState[nameSatetKey] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
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
