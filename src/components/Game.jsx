import React, { useState } from 'react'
import ChoiceButton from './ChoiceButton';

const choices = ['paper', 'scissors', 'rock'];
const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'draw';
  if (
      (userChoice === 'rock' && computerChoice === 'scissors') || 
      (userChoice === 'scissors' && computerChoice === 'paper') || 
      (userChoice === 'paper' && computerChoice === 'rock')
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
    const housePick = getRandomChoice();
    const gameResult = determineWinner(choice, housePick);

    setUserChoice(choice);
    setHouseChoice(housePick);
    setResult(gameResult);
    if (gameResult === 'YOU WIN') {
      setScore(score + 1);
    } else if (gameResult === 'YOU LOSE') {
      setScore(score - 1);
    } else if (score < 0) {
      setScore(0);
    }
  }

  return (
    <div className='game'>
      <div className='choice'>
        {choices.map((choice) => (
          <ChoiceButton 
            key={choice} 
            choice={choice}
            onClick={handleChoice}
          />
        ))}
      </div>
      {userChoice && houseChoice && (
        <div className='result'>
          <span>You picked: {userChoice}</span>
          <h1>{result}</h1>
          <span>The house picked: {houseChoice}</span>
        </div>
      )}
    </div>
  )
}

export default Game