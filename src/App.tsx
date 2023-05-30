import Header from './assets/nome'
import Idade from './assets/idade';
import InfCard from './assets/card';
import { TecList } from './assets/lista';
import './App.css';

function App() {

  return <>
    <header className='header'>
      <h1>Olá Mundo</h1>
      <Header />
      <Idade anos={25} />
    </header>
    <div className='container'>
      <InfCard nome='Jimy Schild' idade={25} ciadade='Santa Cruz' sexo='Homem' />
      <div className='lista'>
        <h2>Estudando Atualmente</h2>
        <ul className='list-tec'>
          {TecList.map((Element) => (
            <li>{Element}</li>
          ))}
        </ul>
      </div>
    </div>


  </>
}

export default App;
