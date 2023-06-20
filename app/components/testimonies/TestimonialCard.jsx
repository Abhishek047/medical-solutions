import Image from 'next/image';
import { Typography } from '../ui/typography/Typography';
import styles from './styles/card.module.css';

export const TestimonialCard = ({
  name,
  testimony,
  hospital,
  location,
  rating,
  designation,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.testimony}>
        <Typography type="body1">
          <q>{testimony}</q>
        </Typography>
      </div>
      <div className={styles.testimonyDetails}>
        <div className={styles.imageContainer}>
            <Image src={image} alt={name} fill />
        </div>
        <div className={styles.details}>
          <Typography type="h6">{name}</Typography>
          <Typography type="body1" gutterBottom={false}>{designation}</Typography>
          <Typography type="body1">{hospital}, {location}</Typography>
        </div>
      </div>
    </div>
  );
};
