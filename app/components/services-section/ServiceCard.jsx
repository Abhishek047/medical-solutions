import Image from 'next/image';
import { Typography } from '../ui/typography/Typography';
import styles from './styles/card.module.css';
import star from '../../../public/images/star.png';

export const ServiceCard = ({ name, description, subGroup, Icon = <></> }) => {

  return (
    <div
      className={styles['card-container']}
    >
      <div className={`${styles['card-overlay']}`}> 
      {subGroup.map(({ name, id }, index) => (
          <div
            key={id}
            className={styles['sub-group-item']}
            style={{
              transitionDelay: `${(index + 1) * 50}ms`,
            }}
          >
            <div className={styles['image-container']}>
              <Image src={star} alt='star-image' fill/>
            </div>
            <Typography gutterBottom={false} type="subheading1">{name}</Typography>
          </div>
      ))}
      </div>
      <div className={styles['icon-container']}>
        <Icon className={styles['card-icon']} />
      </div>
      <Typography type="h5">{name}</Typography>
      <Typography type="body1">{description}</Typography>
    </div>
  );
};
