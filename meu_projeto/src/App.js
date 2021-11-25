import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


const url = 'https://blocktrends.com.br/wp-content/uploads/2021/10/mark.jpg.webp'
const shia = 'https://www.nydailynews.com/resizer/6UteSwwPi5Au8UBhxslLE3TP-XE=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/2GEDMZEAGYSA7VRBYDLX2UHVOY.jpg'
function App() {
  return (
    <div className="App">
      <SayMyName name="Henrique" />
      <Pessoa nome="Dilce" from="Barbacena" dog="Sebastian" mood="Pimpões" />
      <img src={url}  />
      <img src={shia}/>
    </div>
  );
}

export default App;
