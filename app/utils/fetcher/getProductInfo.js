import table1 from '../../../public/images/table.png';
import table2 from '../../../public/images/table-2.png';
import staticData from '../../components/products/defaultData.json';
export const getProductInfo = async (id) => {
  const tableImageArray = [table1, table2];
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data...');
  //   }
  //   const data = res.json();

  //   //   return the same or do computation
  //   return data;
  // map((prod) => ({...prod, img: table1, images: tableImageArray}))
  const productWithImg = staticData.products.filter((prod) => prod.id === id);
  if (productWithImg.length > 0) {
    return {
      ...productWithImg[0],
      img: table1,
      images: tableImageArray,
    };
  }else {
    return null;
  }
};
