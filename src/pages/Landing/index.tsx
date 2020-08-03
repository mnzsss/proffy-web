import React from 'react';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, ButtonsContainer } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="container" id="content">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt="Plataform de Estudos" className="hero-image" />

        <ButtonsContainer>
          <a href="#!" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="#!" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </a>
        </ButtonsContainer>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </Container>
  );
};

export default Landing;
