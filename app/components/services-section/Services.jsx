import { Typography } from '../ui/typography/Typography';
import { ServiceCard } from './ServiceCard';
import data from './data.json';
import styles from './styles/services.module.css';

export const Services = () => {
  return (
    <section className={styles['service-section']}>
      <Typography type="h3">Our Services</Typography>
      <Typography type="h6">
        Comprehensive Solutions for Your Medical Equipment Needs
      </Typography>

      <div className={styles['feature-container']}>
        {data.groups.map((group) => (
          <div key={group.id} className={styles['card-item']}>
            <ServiceCard
              name={group.name}
              description={group.description}
              subGroup={group.subgroups}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
