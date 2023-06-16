import { forwardRef } from 'react';
import typographyStyles from './typography.module.css';

const TYPES = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subheading1: "h6",
    subheading2: "h6",
    body1: "p",
    body2: "p",
    caption: 'span'
  };

export const Typography = forwardRef(({component = 'p', type='body1', color='text', children, gutterBottom = true, fontWeight, className, ...props}, ref) => {
  
    const Component =  component ? component : TYPES[type] ? TYPES[type] : 'p';

    return (
    <Component
    ref={ref} 
    className={
        `${typographyStyles[`typography--variant-${type}`]} 
         ${typographyStyles[`typography--base`]}
         ${typographyStyles[`typography--${color}`]}
         ${gutterBottom ? typographyStyles['typography--gutter-bottom'] : ''} ${className}`
       } 
       style={{
        fontWeight,
       }}
       {...props}>
        {children}
    </Component>
  )
});