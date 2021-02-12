import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import { ObjServices, ObjTwo } from './Data';
import Pricing from '../Pricing/Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <CommonSection {...ObjServices} />
      <CommonSection {...ObjTwo} />
    </>
  );
}

export default Services;
