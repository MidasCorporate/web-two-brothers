import React, { useState, useEffect, useMemo } from 'react';

import { MdInsertComment, MdCancel } from 'react-icons/md';

import api from '~/services/api';
import Read from './Read';

import {
  CardHeader,
  CardBody,
  CardButton,
  WindowMessage,
  Close,
  Contacts,
  Tr,
} from './styles';

function Message() {
  const [tagWindow, setTagWindow] = useState(false);
  const [contacts, setContacts] = useState([]);

  const hasUnread = useMemo(
    () => !!contacts.find((contact) => contact.read === false),
    [contacts]
  );

  useEffect(() => {
    async function loadContact() {
      const response = await api.get('contacts');
      setContacts(response.data);
    }
    loadContact();
  }, []);

  function handleWindow() {
    setTagWindow(!tagWindow);
  }

  async function handleMarkAsRead(_id) {
    await api.put(`contacts/${_id}`);

    setContacts(
      contacts.map((contact) =>
        contact._id === _id ? { ...contact, read: true } : contact
      )
    );
  }

  return (
    <>
      <CardButton onClick={handleWindow}>
        <span>
          <div />
        </span>
        <CardHeader hasUnread={hasUnread}>
          <MdInsertComment color="#FFF" size={35} />
        </CardHeader>
        <CardBody>
          <strong>Mensagens</strong>
          <p>Aqui estão todas as mensagens de seus clientes</p>
        </CardBody>
      </CardButton>
      <WindowMessage tag={tagWindow}>
        <Close>
          <MdCancel color="red" size={20} onClick={() => handleWindow([])} />
        </Close>
        <h3>Mensagens</h3>
        <Contacts cellSpacing={0}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
              <th>Telefone</th>
              <th>Mensagem</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Tr key={contact._id} unread={contact.read}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.cel}</td>
                <td>{contact.tel}</td>
                <td>{contact.message}</td>
                <td>
                  <Read handleMarkAsRead={() => handleMarkAsRead(contact._id)}>
                    {contact}
                  </Read>
                </td>
              </Tr>
            ))}
          </tbody>
        </Contacts>
      </WindowMessage>
    </>
  );
}

export default Message;
