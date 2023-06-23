'use client'
import styles from './footer.module.css';
import { Typography } from '../ui/typography/Typography';
import { usePathname } from 'next/navigation';

export const FooterHeading = () => {
    const pathname = usePathname();
    return (
    <div className={`${styles.heading} ${pathname === '/' ? styles.coloredHeading : ''}`}>
      <Typography gutterBottom={false} type="h3">
        Stay Connected with Us
      </Typography>
    </div>
  );
};
