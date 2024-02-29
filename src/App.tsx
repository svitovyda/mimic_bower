import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/global';
import * as React from 'react';

export const App: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  );
};
