import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

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

  render() {
    console.log(Object.keys(this.state));
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
          <Statistics />
        </Section>
      </div>
    );
  }
}

///import styled from 'styled-components'
