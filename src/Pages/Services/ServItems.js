import React from 'react';
import { GiCook, GiStairsCake, GiPieSlice } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './ServItemsElements';

function Items() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiStairsCake />
                </PricingCardIcon>
                <PricingCardPlan>Custom Cakes</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Birthday Cakes</PricingCardFeature>
                  <PricingCardFeature>Wedding Cakes</PricingCardFeature>
                  <PricingCardFeature>Baby Shower Cakes</PricingCardFeature>
                  <PricingCardFeature>Bridal Shower Cakes</PricingCardFeature>
                </PricingCardFeatures>    
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiPieSlice />
                </PricingCardIcon>
                <PricingCardPlan>Desserts</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Italian pastry</PricingCardFeature>
                  <PricingCardFeature>French pastry</PricingCardFeature>
                  <PricingCardFeature>Belgian pastry</PricingCardFeature>
                  <PricingCardFeature>Venezuelan Pastry</PricingCardFeature>
                </PricingCardFeatures>    
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCook />
                </PricingCardIcon>
                <PricingCardPlan>Catering Service</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>Desserts catering services </PricingCardFeature>
                  <PricingCardFeature>Beverage services</PricingCardFeature>
                  <PricingCardFeature>Planning for events</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>           

          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Items;