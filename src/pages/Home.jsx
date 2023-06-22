import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useEffect, useState } from 'react';
const Home = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
};
export default Home;
