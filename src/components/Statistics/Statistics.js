import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={styles.title}>Statistics</h2>
    <p className={styles.stat}>Good: {good}</p>
    <p className={styles.stat}>Neutral: {neutral}</p>
    <p className={styles.stat}>Bad: {bad}</p>
    <p className={styles.stat}>Total: {total}</p>
    <p className={styles.stat}>Positive feedback: {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
