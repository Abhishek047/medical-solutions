'use client'
import styles from './navbar.module.css';
import Button from '../ui/buttons/Button';
import { ArrowUpRight } from 'react-feather';
import {useScrollPosition} from '../../hooks/useGetScrollPosition';


const BUTTONS = [
  {
    name: 'Contact us',
    type: 'default',
    handler: () => {console.log('handler1')}
  },
  {
    name: 'About',
    type: 'default',
    handler: () => {console.log('handler2')}

  },
  {
    name: 'Buy',
    type: 'fab',
    handler: () => {console.log('handler3')},
    endIcon: <ArrowUpRight />
  },
];

export const Navbar = () => {
  const position = useScrollPosition();

  return (
    <div className={styles.container}>
      <nav className={`${styles['navbar-container']} ${position === 0 ? styles['animate-fade-out'] : styles['animate-fade-in']}`}>
        ICON
        <div className={styles.buttons}>
            {
              BUTTONS.map((btn) => <Button key={btn.name} type={btn.type} color='primary' endIcon={btn?.endIcon || ''} onClick={btn.handler}>{btn.name}</Button>)
            }
        </div>
      </nav>
    </div>
  )
}
