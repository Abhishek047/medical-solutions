import { getProductInfo } from '@/app/utils/fetcher/getProductInfo';
import { ProductDetails } from './ProductDetails';

const ProductPage = async ({ params }) => {
  const { id } = params;
  const data = await getProductInfo(id);

  return (
    <section className="global__container--main">
      <ProductDetails data={data} />
    </section>
  );
};

export default ProductPage;
