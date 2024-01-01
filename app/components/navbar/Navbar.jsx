'use client';
import styles from './navbar.module.css';
import Button from '../ui/buttons/Button';
import { ArrowUpRight } from 'react-feather';
import { useScrollPosition } from '../../hooks/useGetScrollPosition';
import { Modal } from '../ui/modal/Modal';
import { useModalContext } from '@/app/context/contactModalContext';
import { useMemo } from 'react';
import { ContactModal } from '../contact-modal/ContactModal';

const BUTTONS = [
  {
    id: 1,
    name: 'Contact us',
    type: 'default',
    handler: () => {
      console.log('handler1');
    },
  },
  {
    id: 2,
    name: 'About',
    type: 'default',
    handler: () => {
      console.log('handler2');
    },
  },
  {
    id: 3,
    name: 'Buy',
    type: 'fab',
    handler: () => {
      console.log('handler3');
    },
    endIcon: <ArrowUpRight />,
  },
];

export const Navbar = () => {
  const position = useScrollPosition();
  const { openModal = () => {} } = useModalContext();
  const NAV_BUTTONS = useMemo(() => {
    return BUTTONS.map((item) =>
      item.id === 1 ? { ...item, handler: openModal } : item
    );
  }, []);
  return (
    <div className={styles.container}>
      <nav
        className={`${styles['navbar-container']} ${
          position === 0
            ? styles['animate-fade-out']
            : styles['animate-fade-in']
        }`}
      >
        ICON
        <div className={styles.buttons}>
          {NAV_BUTTONS.map((btn) => (
            <Button
              key={btn.name}
              type={btn.type}
              color="primary"
              endIcon={btn?.endIcon || ''}
              onClick={btn.handler}
            >
              {btn.name}
            </Button>
          ))}
        </div>
      </nav>
      <ContactModal />
    </div>
  );
};
