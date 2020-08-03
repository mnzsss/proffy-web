import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/51327920?s=460&u=3bde17a5a3fa079b69f30b09fb483f6dbf577be1&v=4"
          alt="Gabriel Menezes"
        />
        <div>
          <strong>Gabriel Menezes</strong>
          <span>Filosofia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        aspernatur iure quod excepturi. Nemo, consequuntur.
        <br />
        Odit illum deserunt aliquid atque itaque aliquam cum? Nisi blanditiis
        possimus modi praesentium recusandae animi!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em Contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
