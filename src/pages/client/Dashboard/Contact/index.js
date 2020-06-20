import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';
import * as Yup from 'yup';

import api from '~/services/api';

import { Wrapper, Information, Container } from './styles';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  cel: Yup.string(),
  tel: Yup.string(),
  message: Yup.string().required('Mensagem é obrigatória'),
});

function Contact() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [celValue, setCelValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  async function handleSubmit() {
    await api.post('contacts', {
      name: nameValue,
      email: emailValue,
      cel: celValue,
      tel: telValue,
      message: messageValue,
    });

    setNameValue('');
    setEmailValue('');
    setCelValue('');
    setTelValue('');
    setMessageValue('');

    toast.success('Messagem enviado com sucesso');
  }

  return (
    <Wrapper>
      <Container>
        <Information>
          <img src={logo} alt="TwoBrothers" />
          <h3>LOCALIZAÇÃO</h3>
          <p>
            Rua São Paulo, 1600, centro - São Gabriel do Oeste - MS - CEP:
            79490-000
          </p>
        </Information>
        <div className="row">
          <strong className="title" id="contacts">
            Você tem alguma dúvida?
          </strong>
          <strong>Sinta-se livre para nos contatar!</strong>
          <span>
            <FaWhatsapp size={19} />
            <a href="https://api.whatsapp.com/send?phone=5567998408117">
              (67) 9 9840-8117
            </a>
          </span>
        </div>
        <Form onSubmit={handleSubmit} schema={schema}>
          <div>
            <Input
              name="name"
              placeholder="Nome"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div className="contact">
            <Input
              name="cel"
              value={celValue}
              placeholder="Celular"
              onChange={(e) => setCelValue(e.target.value)}
            />
            <Input
              name="tel"
              value={telValue}
              placeholder="Telefone"
              onChange={(e) => setTelValue(e.target.value)}
            />
          </div>
          <div>
            <Textarea
              name="message"
              value={messageValue}
              placeholder="Messagem"
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Contact;
