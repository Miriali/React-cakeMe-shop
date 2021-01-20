import styled from 'styled-components';
import FeaturePic from '../../images/sweet4.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  &:hover{
    opacity: 0.87;
  }

  h1 {
    font-size: clamp(2rem, 3.3vw, 4rem);
    font-weight: 500;
}

  p {
    margin-top: 1.1rem;
    font-size: clamp(1.5rem, 3.5vw, 2.5rem);
    color: #EF709D;
    font-weight: 600;
}
`;