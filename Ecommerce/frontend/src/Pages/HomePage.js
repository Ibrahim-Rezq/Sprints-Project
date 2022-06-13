import React, { useEffect } from 'react';
import { Featured, Hero } from '../Components/Home';

// Redux
import { useProductsContext } from '../Context/ProductContext';

function HomePage() {
  const { productsLoading, products, featuredProducts, onSaleProducts } =
    useProductsContext();
  return (
    <div>
      <Hero />
      <Featured
        FeaturedProducts={featuredProducts}
        bgColor={'var(--bs-gray-900)'}
        name={'Featured Products'}
      />
      <Featured
        name={'OnSale Products'}
        bgColor={'var(--bs-gray-800)'}
        FeaturedProducts={onSaleProducts}
      />
    </div>
  );
}

export default HomePage;
