import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const { value } = e.currentTarget;

    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad === 0
      ? 0
      : Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    const positivePercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.leaveFeedback}
          options={options}
        />

        {good + neutral + bad === 0 && (
          <Notification message="No feedback given"></Notification>
        )}

        {good + neutral + bad > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default App;
