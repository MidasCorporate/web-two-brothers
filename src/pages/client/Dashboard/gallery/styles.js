import styled from 'styled-components';

export const Container = styled.div``;

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

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: #333;

  .slide {
    min-width: 100%;
    height: 78vh;
    overflow: hidden;
  }

  #goLeft {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 78vh;
    background: none;
    border: none;
    outline: none;
    transition: 0.9s;
    cursor: pointer;

    :hover {
      background: rgba(51, 51, 51, 0.5);
    }
  }

  #goRight {
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 78vh;
    background: none;
    border: none;
    outline: none;
    transition: 0.9s;
    cursor: pointer;

    :hover {
      background: rgba(51, 51, 51, 0.5);
    }
  }
`;
