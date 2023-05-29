import Header from './assets/nome'
import Idade from './assets/idade';
import InfCard from './assets/card';
import './App.css';

function App() {

  return <>
    <h1>Olá Mundo</h1>
    <Header />
    <Idade anos={25} />
    <InfCard nome='Jimy Schild' idade={25} ciadade='Santa Cruz' sexo='Homem' />
  </>



}

export default App;
