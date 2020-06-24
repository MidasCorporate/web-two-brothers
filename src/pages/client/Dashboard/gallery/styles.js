import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px 0;

  h3 {
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
  }
`;

export const ImgComp = styled.img`
  width: 100%;
  height: 100vh;
  border-radius: 4px;

  @media (min-width: 2559px) {
    height: 900px;
  }

  @media (max-width: 425px) {
    height: 70vh;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 700px;

  .carousel .slide {
    background: #333;

    .slide {
      height: 600px;
    }
  }

  button {
    width: 5%;
  }

  @media (min-width: 2559px) {
    width: 60%;
    height: 900px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 500px;

    button {
      width: 15%;
    }
  }
`;
