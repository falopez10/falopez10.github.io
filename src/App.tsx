import './App.css';
import { DisplayWrapper } from './views/components';
import { Main } from './views/pages/Main';

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
