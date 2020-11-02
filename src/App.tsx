import './App.css';
import { DisplayWrapper } from './views/components';
import { Main } from './views/pages/Main';
import React from 'react';

function App() {
  return (
    <div className="App">
      <DisplayWrapper>
        <Main />
      </DisplayWrapper>
    </div>
  );
}

export default App;
