import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Header />
      <SayMyName name="Henrique" />
      <Pessoa nome="Dilce" from="Barbacena" dog="Sebastian" mood="Pimpões" />
      <List marca="Porsh" ano_lançamento="{1955}" /> 
      <List marca="Ferrari" ano_lançamento={1984} /> 
      <List marca="Ford" ano_lançamento={1954} /> 
      <List />
    </div>
  );
}

export default App;
