import Level from './components/WeLevel/Level';
import logo from './logo.svg';
// import './App.css';
import HomeData from './components/WeLevel/HomeData.json';
function App() {
  return (
    <div className="App">
      <Level data={HomeData.levels}/>
    </div>
  );
}

export default App;
