import { Typography } from "../ui/typography/Typography"
import productStyles from './styles/products.module.css';
import allProducts from './defaultData.json';
import table from '../../../public/images/table.png';
import { ProductCard } from "./ProductCard";

const Products = () => {
  const productsWithImg = allProducts.products.map((prod) => ({...prod, img: table}));

  return (
    <div>
        <div className={productStyles.container}>
            <Typography type="h3">
                Top selling products
            </Typography>
            <Typography type="h6">
                Find the Perfect Operation Table and More
            </Typography>
            <div className={productStyles['products-container']}>
              {
                productsWithImg.slice(0,4).map(product => (
                <div key={product.id} className={productStyles['product-item']}>
                  <ProductCard 
                    id={product.id}
                    name={product.name} 
                    img={product.img} 
                    color='secondary' 
                    rating={product.rating} 
                    manufacturer={product.manufacturer}
                    dimensions={product.dimensions}
                    price={product.price}
                  />
                </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}
export default Products;
