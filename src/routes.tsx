import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, TeacherList, TeacherForm } from './pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
