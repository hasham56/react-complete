import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import { ObjHome, ObjOne, ObjTwo, ObjThree } from './Data';
import Pricing from '../Pricing/Pricing';

function Home() {
  return (
    <>
      <CommonSection {...ObjHome} />
      <CommonSection {...ObjTwo} />
      <CommonSection {...ObjOne} />
      <Pricing />
      <CommonSection {...ObjThree} />
    </>
  );
}

export default Home;
