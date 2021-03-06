import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2D93AD;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 397px) {
    text-align: center;
    font-size: 2.6rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2.4rem;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`;

export const PricingCard = styled(Link)`
  background: #222;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 350px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 26px;
}

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
}

  @media screen and (max-width: 960px) {
    width: 60%;
    border-radius: 15px;
}

  @media screen and (max-width: 425px) {
    width: 80%;
  border-radius: 15px;
}

  @media screen and (max-width: 960px) {
    width: 90%;
  border-radius: 15px;
}

  @media screen and (max-width: 320px) {
  width: 100%;
  border-radius: 15px;
  
  &:hover {
    transform: none;
}
}
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #EF709D;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  padding: 0 .5rem;
  box-shadow: 0 6px 20px rgba(255,255,255,0.1);
  border-radius: 10px;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;

  @media screen and (max-width: 320px) {
    text-align: center;
}
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F8F1FF;

  @media screen and (max-width: 320px) {
   text-align: center;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;