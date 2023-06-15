'use client'
import { getColorName } from '@/app/utils/getColorName';
import buttonStyles from './button.module.css';
import {  useLayoutEffect, useState, useRef } from 'react';

const BUTTON_TYPES = ['default', 'filled', 'outlined', 'fab']
const SIZES = ['small', 'medium', 'large']


const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 5);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};


const Button = ({type: selectedType, color: selectedColor, children, endIcon: EndIcon, startIcon: StartIcon,className, onClick = () => {}, size: selectedSize = 'medium', ...props}) => {
  const [ripples, setRipples] = useState([]);
  const type = BUTTON_TYPES.includes(selectedType) ? selectedType : BUTTON_TYPES[0];
  const color = getColorName(selectedColor);
  const buttonRef = useRef();
  const size = SIZES.includes(selectedSize) ? selectedSize : SIZES[1];
  
  const handleClick = (event) => {
    // note: WORK on ripple dimension 
    const diameter = Math.max(buttonRef.current.clientWidth, buttonRef.current.clientHeight);
    const radius = diameter/2; 
    const dimension = `${diameter}px`;
    const rect = buttonRef.current.getBoundingClientRect();
    const leftOffset = rect.left + window.scrollX;
    const left = `${(event.clientX + window.scrollX) - (leftOffset + radius)}px`;
    const top = `${(event.clientY + window.scrollY) - (buttonRef.current.offsetTop + radius)}px`;
    const properties = { width: dimension, height: dimension, left, top };
    setRipples((prevState) => [ ...prevState, properties]);
    onClick();
  }

  useDebouncedRippleCleanUp(ripples.length, 400, () => {
    setRipples([]);
  });
  
  const filledClasses = `${color}-${type}`;

  return (
    <button ref={buttonRef} className={`
      ${buttonStyles['button-base']} 
      ${buttonStyles[filledClasses]} 
      ${buttonStyles[`button-${type}`]} 
      ${buttonStyles[`button-size-${size}`]} 
      ${className}
    `} onClick={handleClick} {...props}>
        {!!StartIcon && <span className={buttonStyles.startIcon}>{StartIcon}</span>}
      {
        ripples.length > 0 && ripples.map((ripple, index) => 
          <span key={`ripple_${index}`} style={ripple} className={`${buttonStyles['ripple']} ${buttonStyles[`ripple-${color}`]}`} />
      )}
      {children}
      {!!EndIcon && <span className={buttonStyles.endIcon}>{EndIcon}</span>}
    </button>
  )
}

export default Button