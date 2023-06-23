import styles from './styles.module.css';

export const Divider = ({ marginY }) => {
  return (
    <div
      className={`
      ${styles.divider}
      ${marginY ? styles.marginY : ''}
    `}
    />
  );
};

export default Divider;
