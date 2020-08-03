import React from 'react';

import { PageHeader } from '../../components';

import { Container } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container id="list">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </Container>
  );
};

export default TeacherForm;
