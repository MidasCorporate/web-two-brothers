import styled, { css } from 'styled-components';

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: #fff;
  margin: 10px 0 10px;
  padding: 20px;
  transition: background 0.5s;
  border: none;

  span {
    > div {
      height: 3px;
      width: 0px;
      margin-left: -20px;
      margin-top: 42px;
      border-radius: 4px;
      background: red;
      position: absolute;
      transition: width 0.5s ease-out;
    }
  }
  :hover {
    span {
      > div {
        width: 900px;
      }
    }
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: initial;
  margin-top: -90px;
  margin-left: -10px;
  background: red;
  padding: 5px;
  border-radius: 4px;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: -5px;
        right: -5px;
        width: 15px;
        height: 15px;
        background: #333;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const CardBody = styled.div`
  margin-top: 15px;
  text-align: initial;

  > strong {
    color: #333;
  }

  p {
    color: #777;
    margin-top: 10px;
  }
`;

export const WindowMessage = styled.div`
  background-color: #fff;
  border: 2px solid red;
  color: #999;
  top: 15%;
  left: 10%;
  border-radius: 4px;
  z-index: 1;
  display: ${(props) => (props.tag ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 75%;
  max-height: 600px;
  overflow: auto;
  animation: slide-mensagem 1s;

  @keyframes slide-mensagem {
    from {
      transform: translate3d(0px, -100px, 0px);
      opacity: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }

  h3 {
    color: #ef4336;
  }

  @media (max-width: 425px) {
    width: 100%;
    left: 0;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  svg {
    cursor: pointer;
    margin: none;
  }
`;

export const Contacts = styled.table`
  width: 100%;

  thead th {
    text-align: center;
    color: #333;
    height: 50px;
    border-bottom: 1px solid #ef4336;
  }
`;

export const Tr = styled.tr`
  td {
    width: 50px;
    text-align: center;
    background: #fff;
    color: #666;
    height: 44px;
    border-bottom: 1px solid #eee;
    max-width: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${(props) => (props.unread ? '#999' : '#333')};
    font-weight: ${(props) => (props.unread ? '400' : 'bold')};
  }
`;
