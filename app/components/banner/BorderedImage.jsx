import Image from "next/image"
import styles from './styles/borderImage.module.css';

const hexCheckReg =/^#([0-9a-f]{3}){1,2}$/i;
const BorderedImage = ({src, alt, color: initialColor = 'primary', width = 'auto', vertical : initialV='top', horizontal: initialH ='left', height = 'auto', name = 'text'}) => {
    const isHex = hexCheckReg.test(initialColor);
    const color = isHex ? initialColor : ['primary', 'secondary'].some(val => val === initialColor) ? initialColor  : 'primary';
    const vertical = ['top', 'bottom'].includes(initialV) ? initialV : 'top';
    const horizontal = ['left', 'right'].includes(initialH) ? initialH : 'left';

    return src ? (
    <div className={`
        ${styles["image-container"]} 
        ${styles[`image-container-${color}`]}
        ${styles[`image-container-orientation-${vertical}`]}
        ${styles[`image-container-orientation-${horizontal}`]}
        `} 
        style={{
            width,
            height,
        }}>
        <div className={`
        ${styles['text-border']}
        ${styles[`text-border-${color}`]}
        ${styles[`text-border-orientation-${vertical}`]}
        ${styles[`text-border-orientation-${horizontal}`]}
        `}>
            {name}
        </div>
        <div 
        className={`
            ${styles["image-text"]} 
            ${styles[`image-text-${color}`]}
            ${styles[`image-text-orientation-${vertical}`]}
            ${styles[`image-text-orientation-${horizontal}`]}
        `}
        style={isHex ? {
            backgroundColor: color,
        } : {}}
        >
            {name}
        </div>
        <Image src={src} alt={name || alt} fill />
    </div>
  ) : '';
}

export default BorderedImage