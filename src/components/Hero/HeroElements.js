import styled from 'styled-components';
import ImgBg from '../../images/bg-1.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 560px;
  color: #fff;
  line-height: 1;

  @media screen and (max-width: 768px) {
    width: 70%;
}

  @media screen and (max-width: 768px) {
    width: 80%;
}

  @media screen and (max-width: 375px) {
    width: 90%;
}

  @media screen and (max-width: 320px) {
    width: 100%;
}
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #70E4EF;
  letter-spacing: 2.5px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 500;
`;

export const HeroBtn = styled.a`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  font-style: none;
  font-weight: 500;
  text-decoration: none;
  border: none;
  background: #FAFF81;
  color: #222;
  border-radius: 10px;
  transition: 0.2s ease-out;

  &:hover {
    background: #EF709D;
    outline: none;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #222;
}

  @media screen and (max-width: 768px) {
    padding: 0.68rem 1.25rem;
}

  @media screen and (max-width: 320px) {
    padding: 0.5rem;
}
`;