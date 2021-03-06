import React from 'react';

import { PageHeader, TeacherItem } from '../../components';

import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container id="list">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="seacrh-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </Container>
  );
};

export default TeacherList;
