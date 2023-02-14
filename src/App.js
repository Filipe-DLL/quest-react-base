import './App.css';

import { Paragrafo } from './components/Paragrafo';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <div>
        <Paragrafo color={'#8c61ff'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste voluptatum et, voluptates, perferendis magnam sit quos repellendus earum corporis totam saepe accusantium, incidunt culpa accusamus? Id officia ipsa explicabo.
        </Paragrafo>
        <Button>
            Clique Aqui
        </Button>
      </div>
    </div>
  );
}

export default App;
