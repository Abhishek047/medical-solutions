import Image from 'next/image';
import card from './styles/card.module.css';
import { Typography } from '../ui/typography/Typography';
import { getColorName } from '@/app/utils/getColorName';
import { Rating } from '../ui/rating/Rating';
import Button from '../ui/buttons/Button';
import { ShoppingBag } from 'react-feather';

export const ProductCard = ({name, img, color: selectedColor, rating, manufacturer, dimensions, price = ''}) => {
  const color = getColorName(selectedColor);
  return (
    <div className={`${card.container} ${card[`${color}`]}`}>
        <div className={card.image}>
            <Image src={img} alt={name || alt} fill />
        </div>
        <div className={card.content}>
          <div className={card['content-item']}>
            <Typography className={card.text} type='subheading1'>
                {name}
            </Typography>
          </div>
          <div className={card['content-item']}>
            <Typography type='body1' className={card['manufacturer']}>
              {manufacturer}
            </Typography>
          </div>
          <div className={card['content-item']}>
              <Rating  value={rating}/>
          </div>
          <div className={card['content-item']}>
            <Typography type='body1' gutterBottom={false}>
              Dimensions : {dimensions.length}cm x {dimensions.width}cm x {dimensions.height}cm <br />
              <Typography type='caption' component='span' gutterBottom={true}>
              (length x width x height) 
              </Typography>
            </Typography>
          </div>
          <div className={card["content-item"]}>
            <div className={card['button-grp']}>
              <Button type='outlined' color='primary' size='small' endIcon={<ShoppingBag width={'0.9rem'}/>}>
                {price ? price : 'Contact'}
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}
