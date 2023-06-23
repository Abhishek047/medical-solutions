import { Typography } from '@/app/components/ui/typography/Typography';
import styles from './styles.module.css';
import { getProductInfo } from '@/app/utils/fetcher/getProductInfo';
import { Divider } from '@/app/components/ui/divider/Divider';
import Button from '@/app/components/ui/buttons/Button';
import { ShoppingBag } from 'react-feather';

const ProductPage = async ({ params }) => {
  const { id } = params;
  const data = await getProductInfo(id);

  return (
    <div className="global--container__main">
      <div className={styles['product-container']}>
        <div className={styles['image-section']}>
          <div className={styles['image-background']} />
          <div className={styles['image__slide-item']}>
            <img src={data.images[1].src} alt={data.name} />
          </div>
        </div>
        <div className={styles['content-section']}>
          <Typography gutterBottom={false} type="h4">
            {data.name}
          </Typography>
          <Typography type="subheading1">
            {data.inStock ? 'In Stock' : 'Out Of Stock'}
          </Typography>
          <Typography type="body1">
            Manufactured by - {data.manufacturer}
          </Typography>
          <Divider marginY />
          <Typography type="subheading2">{data.longDescription}</Typography>
          <Typography type="subheading2">
            <b>
              Dimensions : {data.dimensions.length}cm x {data.dimensions.width}
              cm x {data.dimensions.height}cm <br />
            </b>
            <Typography type="caption" component="span" gutterBottom={true}>
              (length x width x height)
            </Typography>
          </Typography>
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
  );
};

export default ProductPage;
