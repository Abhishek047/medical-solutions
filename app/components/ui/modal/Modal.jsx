'use client';
import { CSSTransition } from 'react-transition-group';
import styles from './modal.module.css';
import { useCallback, useRef } from 'react';
import { useClickOutside } from '@/app/hooks/useClickOutside';

export const Modal = ({
  open = true,
  allowBackdrop = true,
  handleClose = () => {},
  children,
}) => {
  const ref = useRef();
  const contentRef = useRef();
  const backdropClick = useCallback(
    (event) => {
      if (allowBackdrop) {
        handleClose();
      }
    },
    [allowBackdrop]
  );
  useClickOutside({ ref: contentRef, handler: backdropClick });
  return (
    <CSSTransition
      unmountOnExit
      nodeRef={ref}
      timeout={2000}
      in={open}
      classNames="modal"
    >
      <div ref={ref} className={styles['main-modal']}>
        <div className={open ? styles['close-white-backdrop'] : ''} />
        <div className={!open ? styles['open-white-backdrop'] : ''} />
        <div
          className={`${styles['modal-backdrop']} ${
            open ? styles['open-modal-entry'] : styles['close-modal-entry']
          }`}
        />
        <div
          className={`${styles['modal-section-container']} ${
            open ? styles['open-modal-entry'] : styles['close-modal-entry']
          }`}
        >
          <div ref={contentRef} className={styles['modal-section-content']}>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
