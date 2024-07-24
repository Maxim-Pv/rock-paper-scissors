import { useState } from 'react';
import Game from './components/Game';
import Rules from './components/Rules';
import './styles.css';

function App() {
  const [score, setScore] = useState(0);
  const [activeRules, setActiveRules] = useState(false);
  
  return (
    <div className="container">
      <div className='header'>
        <div className='title'>
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
          <h1>Lizard</h1>
          <h1>Spock</h1>
        </div>
        <div className='score'>
          <span className='score-title'>Score</span>
          <span className='score-number'>{score}</span>
        </div>
      </div>
      <button className='btn-rules' onClick={() => setActiveRules(true)}>
        rules
      </button>
      <Game 
        score={score} setScore={setScore}
        />
      <Rules 
        active={activeRules} setActive={setActiveRules}
        />
    </div>
  );
}

export default App;
