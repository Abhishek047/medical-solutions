'use client';
import { Typography } from '@/app/components/ui/typography/Typography';
import styles from './styles.module.css';
import { Divider } from '@/app/components/ui/divider/Divider';
import Button from '@/app/components/ui/buttons/Button';
import { ShoppingBag } from 'react-feather';
import { useMemo, useState } from 'react';
import { Rating } from '@/app/components/ui/rating/Rating';
import { Slider } from '../../components/ui/slider-nav/Slider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const navSliderTabs = ['Description', 'About'];
const TABS = navSliderTabs.map((heading) => (
  <Typography type="h6">{heading}</Typography>
));
const dataDesc = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium facere, accusamus nihil temporibus enim consequatur at alias et aliquam animi! Obcaecati consectetur cumque consequuntur suscipit ab iste maxime laborum.',
  ' Velit accusantium facere, accusamus nihil temporibus enim consequatur at alias et aliquam animi! Obcaecati consectetur cumque consequuntur suscipit ab iste maxime laborum.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit, maxime laborum.',
];

export const ProductDetails = ({ data }) => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(null);
  const handleChangeItem = (index) => {
    setActive(index);
  };

  const contentForTabs = useMemo(() => {
    if (data) {
      const description = <Typography>{data.longDescription}</Typography>;
      const about = (
        <>
          <Typography type="subheading2">
            <b>
              Dimensions : {data.dimensions.length}cm x {data.dimensions.width}
              cm x {data.dimensions.height}cm <br />
            </b>
            <Typography type="caption" component="span" gutterBottom={true}>
              (length x width x height)
            </Typography>
          </Typography>
        </>
      );
      return [description, about];
    } else {
      return [];
    }
  }, [data]);

  return (
    <>
      <div className={styles['product-container']}>
        <div className={styles['image-section']}>
          <div className={styles['image__slide-item']}>
            <img src={data.images[active].src} alt={data.name} />
          </div>
          <div className={styles['image-slider-scroll']}>
            {data.images.map((url, index) => (
              <div
                onClick={() => handleChangeItem(index)}
                key={`${url.src}-${index}`}
                className={styles['image-slider-scroll-item']}
                style={{
                  backgroundImage: `url(${url.src})`,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles['content-section']}>
          <Typography type="h4" component="h1">
            {data.name}
          </Typography>
          <Typography
            className={`${styles['stock']} ${
              styles[data.inStock ? 'in-stock' : 'out-stock']
            }`}
            gutterBottom
            type="subheading1"
          >
            {data.inStock ? 'In-stock' : 'Out Of Stock'}
          </Typography>
          <Typography gutterBottom type="body1">
            Manufactured by - {data.manufacturer}
          </Typography>
          <Divider marginY />
          <Typography gutterBottom type="subheading2">
            {data.description}
          </Typography>
          <div
            style={{
              margin: '0.5rem 0',
            }}
          >
            <Rating value={data.rating} />
          </div>
          <div className={styles['description-actions']}>
            <Button
              type="filled"
              color="primary"
              className={styles['action-button']}
              endIcon={<ShoppingBag width={'1.2rem'} />}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`${styles['product-container']} ${styles['product-container__description']} content-entry`}
      >
        <div className={styles['image-section']} />
        <div className={styles['content-section']}>
          <div className={styles['details-section-container']}>
            <div className={styles['details-section-slider']}>
              <Slider tab={tab} setTab={setTab} navSliderTabs={TABS} />
            </div>

            <div className={styles['details-section']}>
              <TransitionGroup>
                <CSSTransition key={tab} timeout={1000} classNames="entry-text">
                  <div className={styles['details-section-content']}>
                    {contentForTabs[tab]}
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
