import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Content = styled.div`
  display: flex;
  width: 90%;
  height: 600px;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #333;

  .slide {
    min-width: 50%;
    height: auto;
    /* background-size: cover; */
  }

  button {
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

      svg {
        color: #999;
      }
    }

    svg {
      color: #fff;
    }
  }

  #goLeft {
    left: 0;
  }

  #goRight {
    right: 0;
  }
`;
