import React, { useState } from 'react';

import { MdRemoveRedEye } from 'react-icons/md';

import Modal from '~/components/Modal';

import { Container, ButtonView } from './styles';

export default function Read({ children, handleMarkAsRead }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    handleMarkAsRead();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Modal
        contact={children}
        closeModal={() => closeModal()}
        isOpen={isOpen}
      />

      <ButtonView>
        <button type="button" onClick={openModal}>
          <MdRemoveRedEye size={20} />
        </button>
      </ButtonView>
    </Container>
  );
}
