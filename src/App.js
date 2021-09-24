import logo from './logo.svg';
// import './App.css';
import Level from './components/WeLevels/Level';
import Final from './components/FinalSection/FinalSection'
import HomeData from './pages/home/HomeData.json'
function App() {
  return (
    <div className="App">
      <Final/>
      <Level data={HomeData.levels}/>
    </div>
  );
}

export default App;
