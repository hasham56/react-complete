import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import { ObjSignUp, ObjTwo } from './Data';
import Pricing from '../Pricing/Pricing';

function SignUp() {
  return (
    <>
      <CommonSection {...ObjSignUp} />
      <CommonSection {...ObjTwo} />
    </>
  );
}

export default SignUp;
