import React from 'react';
import Modal from 'react-modal';

import { ModalContainer } from './styles';

export default function ReadOrder({ isOpen, closeModal, contact }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="Visualizar"
      style={{
        overlay: {
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          background: 'rgba(51, 51, 51, 0.25)',
          zIndex: '2',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '4px',
          width: '550px',
          height: '580px',
        },
      }}
    >
      <ModalContainer>
        <div className="mesangemModal">
          <strong>informações da mensagem</strong>
        </div>
        <div className="contactsModal">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.cel}</p>
          <p>{contact.tel}</p>
          <p>{contact.message}</p>
        </div>
      </ModalContainer>
    </Modal>
  );
}
