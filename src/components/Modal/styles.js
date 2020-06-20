import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .mesangemModal {
    border-bottom: 1px solid #eee;
    margin: 10px 0px;
    padding-bottom: 10px;

    strong {
      margin: 10px 0;
      color: #ef4336;
    }
  }

  .contactsModal {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    color: #555;

    p {
      word-wrap: break-word;
    }
  }
`;
