import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    {options.map(option => (
      <button
        type="button"
        key={option}
        className={styles.button}
        onClick={onLeaveFeedback}
        value={option}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
