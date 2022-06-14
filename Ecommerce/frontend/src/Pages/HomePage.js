import React from 'react';
import { Featured, Hero } from '../Components/Home';
import { useProductsContext } from '../Context/ProductContext';

function HomePage() {
  const { featuredProducts, onSaleProducts } = useProductsContext();
  return (
    <div>
      <Hero />
      <Featured
        FeaturedProducts={featuredProducts}
        bgColor={'var(--bs-gray-100)'}
        name={'Featured Products'}
      />
      <Featured
        name={'OnSale Products'}
        bgColor={'var(--bs-gray-200)'}
        FeaturedProducts={onSaleProducts}
      />
    </div>
  );
}

export default HomePage;
