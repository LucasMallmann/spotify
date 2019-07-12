/* eslint-disable react/button-has-type */
import React from 'react';

import CloseIcon from '../../assets/images/close.svg';

import { Container } from './ErrorBoxStyle';

const ErrorBox = () => (
  <Container>
    <p>Mensagem de erro</p>
    <button>
      <img src={CloseIcon} alt="Fechar" />
    </button>
  </Container>
);

export default ErrorBox;
