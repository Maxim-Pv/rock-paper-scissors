import { useState } from 'react';
import Game from './components/Game';
import './styles.css';

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <div className="container">
      <div className='header'>
        <div className='title'>
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
        </div>
        <div className='score'>
          <span>Score</span>
          <span>{score}</span>
        </div>
      </div>
      <Game 
        score={score} setScore={setScore}
      />
    </div>
  );
}

export default App;
