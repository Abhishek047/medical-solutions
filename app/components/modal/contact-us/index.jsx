'use client';
import { useModalContext } from '@/app/context/contactModalContext';
import styles from './contact-us.module.css';

export const ContactUs = () => {
  const { open, closeModal } = useModalContext();

  return open === null ? (
    ''
  ) : (
    <div className={`${styles['dialog-container']}`}>
      <div className={styles['backdrop']} />
      <div className={styles['dialog-content']}>My content for dialog</div>
    </div>
  );
};
