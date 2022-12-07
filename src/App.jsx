import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import CharCard from './components/CharCard';

function App() {
  const [characterList, setcharacterList] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/').then((response) => response.json()).then((response) => setcharacterList(response)).catch((err) => console.log(err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <CharCard/>
        <Characters characterList={characterList}/>
      </header>
    </div>
  );
}

export default App;
