import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
