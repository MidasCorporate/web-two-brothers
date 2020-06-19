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
  padding: 25px 5px 10px 10px;
  border-radius: 4px;
  margin-left: 45px;
  z-index: 1;
  display: ${(props) => (props.tag ? 'flex' : 'none')};
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 50%;
  max-height: 600px;
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

  fieldset {
    width: 100%;
    overflow: auto;
    padding: 10px 0;

    table {
      width: 100%;

      tbody {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .openMessage {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: calc(50% + 10px);
    left: calc(15% - 105px);
    width: 800px;
    height: 400px;
    padding: 20px 5px 2px 10px;
    background-color: #fff;
    border: 2px solid red;
    box-shadow: 0px 2px 15px rgba(51, 51, 51, 0.15);
    max-width: 900px;
    /* text-overflow: unset; */
    /* white-space: nowrap; */
    overflow: auto;

    p {
      margin-bottom: 5px;
    }
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

export const ButtonContact = styled.button`
  display: flex;
  border: none;
  background: #ffff;

  tr {
    padding: 5px 0;
    background: #ffff;
    border-radius: 4px;
    padding-left: 5px;

    & + tr {
      margin: 10px 0;
    }

    td {
      max-width: 200px;
      margin-left: 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${(props) => (props.unread ? '#999' : '#333')};
      font-weight: ${(props) => (props.unread ? '400' : 'bold')};

      & + td {
        padding-left: 15px;
      }
    }
  }
`;
