import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #2D93AD;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 8px 8px #EF709D;

  @media screen and (max-width: 426px) {
    height: 280px;
    min-width: 290px;
    max-width: 100%;
}

  @media screen and (max-width: 326px) {
    height: 240px;
    min-width: 250px;
    max-width: 100%;
}
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: 4.5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.85rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductPrice = styled.p`
  margin: 1rem 0;
  font-weight: 300;
  font-size: 1.8rem;
  color: #222;
`;

export const ProductButton = styled.a`
  font-size: .9rem;
  padding: 0.8rem 1rem;
  border: none;
  background: #FAFF81;
  color: #222;
  border-radius: 10px;
  transition: 0.2 ease-out;
  margin-bottom: 2.5rem;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    background: #EF709D;
    outline: none;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #222;
}
`;