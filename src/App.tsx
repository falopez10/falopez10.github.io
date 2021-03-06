import './App.css';
import { DisplayWrapper } from './views/components';
import { Main } from './views/pages/Main';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div className="App">
      <DisplayWrapper>
        <Main />
      </DisplayWrapper>
    </div>
  );
}

export default App;
