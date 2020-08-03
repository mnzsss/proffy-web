import React from 'react';

import GlobalStyle from './styles/global';
import { Landing } from './pages';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Landing />
    </>
  );
};

export default App;
