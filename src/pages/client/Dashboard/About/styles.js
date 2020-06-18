import styled from 'styled-components';

export const About = styled.div`
  width: 100%;
  padding: 40px 0 70px 0;
  background: #f6f6f6;
  margin-top: 100px;

  @media (max-width: 425px) {
    margin-top: 20px;
    padding: 30px 0 10px 0;
  }
`;

export const Container = styled.div`
  /* @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  } */
`;

export const SectionTitle = styled.div`
  text-align: center;
  padding: 30px 0;
  h2 {
    color: #333;
    margin-bottom: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageAbout = styled.img`
  width: 900px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 425px) {
    width: 250px;
  }
`;

export const Description = styled.div`
  h4 {
    color: #555;
    margin-top: 20px;
  }

  p {
    color: #777;
  }
`;
