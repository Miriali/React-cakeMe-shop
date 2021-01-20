import React from 'react';
import { InfoSection } from '../../components/index';
import { homeObjOne, homeObjTwo } from './servicesElements';
import Items from './ServItems';

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Items />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Services;