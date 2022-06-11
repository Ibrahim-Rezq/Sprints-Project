import React, { useEffect } from 'react';
import { Featured, Hero } from '../Components/Home';

// Redux
import { useProductsContext } from '../Context/ProductContext';

function HomePage() {
  const { productsLoading, featuredProducts, onSaleProducts } =
    useProductsContext();

  return (
    <div>
      <Hero />
      <Featured
        FeaturedProducts={featuredProducts}
        bgColor={'white'}
        name={'Featured Products'}
      />
      <Featured
        name={'OnSale Products'}
        bgColor={'light'}
        FeaturedProducts={onSaleProducts}
      />
    </div>
  );
}

export default HomePage;
