import { Typography } from '../ui/typography/Typography';
import styles  from './styles/feature.module.css';

export const Feature = ({text = '', color = 'default'}) => {
  return text ? (
    <Typography type='subheading1' className={`
    ${styles.feature}
    ${styles[`feature-${color}`]}
    `}>
      {text}
    </Typography>
  ) : '';
}
