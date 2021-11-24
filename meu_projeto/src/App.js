
import './App.css';
import HelloWorld from "./components/HelloWorld"

const name = "Henrique"
const soma = 2 + 22
function calcula(a,b){
  return a * b
}

const url = 'https://via.placeholder.com/150'
function App() {
  return (
    <div className="App">
      <h1>Olá {name}</h1>
      <p>a soma é {soma}</p>
      <p>{calcula(2,5)}</p>
      <img src={url} alt="djfj" />
      <HelloWorld />
    </div>
  );
}

export default App;
