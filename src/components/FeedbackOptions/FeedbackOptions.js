import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <>
    <button type="button" className={styles.button} onClick={onGood}>
      Good
    </button>
    <button type="button" className={styles.button} onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" className={styles.button} onClick={onBad}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;
