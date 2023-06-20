import styles from './styles/testimonial.module.css';
import testimonyData from './data.json';
import { TestimonialCard } from './TestimonialCard';
import { Typography } from '../ui/typography/Typography';

const Testimonial = () => {
  const testimony = testimonyData.testimonials[0];

  return (
    <section className={styles.container}>
      <Typography type="h3"> Words of Delight</Typography>
      <Typography type="h6">"Hear from Our Satisfied Customers</Typography>

      <div className={styles['testimonials-container']}>
        <div className={styles['testimonials-item']}>
          <TestimonialCard
            name={testimony.name}
            designation={testimony.designation}
            testimony={testimony.testimonial}
            location={testimony.location}
            hospital={testimony.hospital}
            image={testimony.image}
          />
        </div>
        <div className={styles['testimonials-item']}>
          <TestimonialCard
            name={testimony.name}
            designation={testimony.designation}
            testimony={testimony.testimonial}
            location={testimony.location}
            hospital={testimony.hospital}
            image={testimony.image}
          />
        </div>
        <div className={styles['testimonials-item']}>
          <TestimonialCard
            name={testimony.name}
            designation={testimony.designation}
            testimony={testimony.testimonial}
            location={testimony.location}
            hospital={testimony.hospital}
            image={testimony.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;