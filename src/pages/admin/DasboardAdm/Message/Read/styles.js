import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ButtonView = styled.div`
  display: flex;
  justify-content: center;
  svg {
    display: flex;
    margin-right: 5px;
    color: #ef4336;
    transition: color 0.6s;

    :hover {
      color: #333;
    }
  }
  button {
    display: flex;
    background: none;
    border: none;
  }
`;
