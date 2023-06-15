import { Typography } from "../ui/typography/Typography"
import productStyles from './styles/products.module.css';
import allProducts from './defaultData.json';
import table from '../../../public/images/table.png';
import { ProductCard } from "./ProductCard";

const Products = () => {
  const productsWithImg = allProducts.products.map((prod) => ({...prod, img: table}));

  return (
    <section>
        <div className={productStyles.container}>
            <Typography type="h3">
                Top selling products
            </Typography>
            <Typography type="h6">
                Find the Perfect Operation Table and More
            </Typography>
            <div className={productStyles['products-container']}>
              {
                productsWithImg.map(product => (
                <div key={product.id} className={productStyles['product-item']}>
                  <ProductCard 
                    name={productsWithImg[0].name} 
                    img={productsWithImg[0].img} 
                    color='secondary' 
                    rating={productsWithImg[0].rating} 
                    manufacturer={productsWithImg[0].manufacturer}
                    dimensions={productsWithImg[0].dimensions}
                    price={productsWithImg[0].price}
                  />
                </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}
export default Products;
