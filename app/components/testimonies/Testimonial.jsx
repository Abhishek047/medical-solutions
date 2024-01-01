import styles from './styles/testimonial.module.css';
import testimonyData from './data.json';
import { TestimonialCard } from './TestimonialCard';
import { Typography } from '../ui/typography/Typography';

const Testimonial = () => {
  const testimonies = testimonyData.testimonials.slice(0, 3);
  return (
    <div className={styles.container}>
      <Typography type="h3" gutterBottom>
        Words of Delight
      </Typography>
      <Typography gutterBottom type="h6">
        "Hear from Our Satisfied Customers
      </Typography>

      <div className={styles['testimonials-container']}>
        {testimonies.map((testimony) => (
          <div key={testimony.id} className={styles['testimonials-item']}>
            <TestimonialCard
              name={testimony.name}
              designation={testimony.designation}
              testimony={testimony.testimonial}
              location={testimony.location}
              hospital={testimony.hospital}
              image={testimony.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
