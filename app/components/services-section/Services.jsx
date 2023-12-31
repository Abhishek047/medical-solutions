import { Typography } from '../ui/typography/Typography';
import { ServiceCard } from './ServiceCard';
import data from './data.json';
import styles from './styles/services.module.css';
import {
  CustomerServiceIcon,
  ServicesIcon,
  SupportIcon,
} from '../ui/custom-icons';

const SERVICES = [
  {
    Icon: ServicesIcon,
    ...data.groups[0],
  },
  {
    Icon: SupportIcon,
    ...data.groups[1],
  },
  {
    Icon: CustomerServiceIcon,
    ...data.groups[2],
  },
];

export const Services = () => {
  return (
    <div className={styles['service-section']}>
      <Typography type="h3" gutterBottom>
        Our Services
      </Typography>
      <Typography
        style={{
          marginBottom: '2rem',
        }}
        type="h6"
        gutterBottom
      >
        Comprehensive Solutions for Your Medical Equipment Needs
      </Typography>

      <div className={styles['feature-container']}>
        {SERVICES.map((group) => (
          <div key={group.id} className={styles['card-item']}>
            <ServiceCard
              Icon={group.Icon}
              name={group.name}
              description={group.description}
              subGroup={group.subgroups}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
