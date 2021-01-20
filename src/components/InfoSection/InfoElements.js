import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#D499B9')};
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 25px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-directions: column;
}
`;

export const TextWrapper = styled.div`
  max-width: 40vw;
  padding-top: 0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 768px) {
    max-width: 90vw;
    padding-bottom: 0;
}
`;

export const ImgWrapper = styled.div`
  max-width: 40vw;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 768px) {
    margin: 0 auto;
}
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#B23A48' : '#2778a3')};
  font-size: 2rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
}

  @media screen and (max-width: 320px) {
    font-size: 1.6rem;
}
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  border-radius: 20px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  @media screen and (max-width: 768px) {
    display: none;
}
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#222' : '#fff')};
  
  @media screen and (max-width: 425px) {
    font-size: 40px;
}

  @media screen and (max-width: 375px) {
    font-size: 38px;
}

  @media screen and (max-width: 320px) {
    font-size: 34px;
    margin-bottom: 20px;
}
`;

export const Subtitle = styled.p`
  max-width: 500px;
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#222' : '#1c2237')};
  text-align: justify;

  @media screen and (max-width: 425px) {
    font-size: 16px;
}
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
}

  @media screen and (max-width: 960px) {
    width: 100%;
}
`;