import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import { ObjProduct, ObjOne } from './Data';
import Pricing from '../Pricing/Pricing';

function Products() {
  return (
    <>
      <CommonSection {...ObjProduct} />
      <CommonSection {...ObjOne} />
    </>
  );
}

export default Products;
