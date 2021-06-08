import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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

    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.onGood}>
          Good
        </button>
        <button type="button" onClick={this.onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.onBad}>
          Bad
        </button>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

export default Feedback;
