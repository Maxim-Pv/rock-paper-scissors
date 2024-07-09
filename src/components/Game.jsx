import React, { useState } from 'react'
import ChoiceButton from './ChoiceButton';

const choices = ['paper', 'scissors', 'rock'];
const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];
const determineWinner = (userChoice, houseChoice) => {
  if (userChoice === houseChoice) return 'DRAW';
  if (
      (userChoice === 'rock' && houseChoice === 'scissors') || 
      (userChoice === 'scissors' && houseChoice === 'paper') || 
      (userChoice === 'paper' && houseChoice === 'rock')
    ) {
      return 'YOU WIN';
    }
    return 'YOU LOSE';
}
const Game = ({score, setScore}) => {
  const [userChoice, setUserChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    setUserChoice(choice);
    setTimeout(() => {
      const housePick = getRandomChoice();
      const gameResult = determineWinner(choice, housePick);
      
      setHouseChoice(housePick);
      setResult(gameResult);
      if (gameResult === 'YOU WIN') {
        setScore(score + 1);
      } else if (gameResult === 'YOU LOSE' && score > 0) {
        setScore(score - 1);
      } else if (gameResult === 'DRAW') {
        setScore(score);
      }
    }, 2000);
    
  }

  return (
    <div className={`game ${result && 'gameResult'}`}>
      <div className={`choice ${userChoice ? 'hidden' : ''}`}>
        {choices.map((choice) => (
          <ChoiceButton 
            key={choice} 
            choice={choice}
            onClick={handleChoice}
          />
        ))}
      </div>
      {userChoice && (
        <div className='result'>
          <div className='choice-info'>
            <span>You picked</span>
            <ChoiceButton 
              choice={userChoice} 
              userChoice={userChoice} 
              />
          </div>
          <div className={result ? 'result-info' : 'hidden'}>
            <h1>{result}</h1>
            <button className='btn-play-again'>Play Again</button>
          </div>
          <div className='choice-info'>
            <span>The house picked</span>
            <ChoiceButton 
              choice={houseChoice} 
              houseChoice={houseChoice} 
              />
          </div>
        </div>
      )}
    </div>
  )
}

export default Game