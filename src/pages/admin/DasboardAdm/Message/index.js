import React, { useState, useEffect, useMemo } from 'react';

import { MdInsertComment, MdCancel } from 'react-icons/md';

import api from '~/services/api';

import {
  CardHeader,
  CardBody,
  CardButton,
  WindowMessage,
  Close,
  ButtonContact,
} from './styles';

function Post() {
  const [tagWindow, setTagWindow] = useState(false);
  const [open, setOpen] = useState(false);
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
    setOpen(!open);
  }

  function handleCloseMessage() {
    setOpen(!open);
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
        <fieldset>
          <table cellSpacing={0}>
            <tbody>
              {contacts.map((contact) => (
                <ButtonContact
                  key={contact._id}
                  unread={contact.read}
                  open={open}
                  type="button"
                  onClick={() => handleMarkAsRead(contact._id)}
                >
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.cel}</td>
                    <td>{contact.tel}</td>
                    <td>{contact.message}</td>
                  </tr>
                  <div className="openMessage">
                    <Close open={open}>
                      <MdCancel
                        color="red"
                        size={20}
                        onClick={() => handleCloseMessage()}
                      />
                    </Close>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.cel}</p>
                    <p>{contact.tel}</p>
                    <span>{contact.message}</span>
                  </div>
                </ButtonContact>
              ))}
            </tbody>
          </table>
        </fieldset>
      </WindowMessage>
    </>
  );
}

export default Post;
