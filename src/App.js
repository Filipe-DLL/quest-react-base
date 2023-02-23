import './index.css';

import { Paragrafo } from './components/Paragrafo';
import { AlertButton } from './components/AlertButton';

function App() {
  return (
    <div className="App">
      <div>
        <Paragrafo color={'#8c61ff'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste voluptatum et, voluptates, perferendis magnam sit quos repellendus earum corporis totam saepe accusantium, incidunt culpa accusamus? Id officia ipsa explicabo.
        </Paragrafo>
        <AlertButton>
            Clique Aqui
        </AlertButton>
      </div>
    </div>
  );
}

export default App;
