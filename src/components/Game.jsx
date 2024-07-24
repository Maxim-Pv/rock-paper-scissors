import React, { useState } from 'react'
import ChoiceButton from './ChoiceButton';

const choices = ['scissors', 'spock', 'paper', 'lizard', 'rock'];
const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];
const determineWinner = (userChoice, houseChoice) => {
  if (userChoice === houseChoice) return 'DRAW';
  if (
      (userChoice === 'rock' && (houseChoice === 'scissors' || houseChoice === 'lizard')) || 
      (userChoice === 'scissors' && (houseChoice === 'paper' || houseChoice === 'lizard')) || 
      (userChoice === 'paper' && (houseChoice === 'rock' || houseChoice === 'spock')) || 
      (userChoice === 'spock' && (houseChoice === 'scissors' || houseChoice === 'rock')) || 
      (userChoice === 'lizard' && (houseChoice === 'paper' || houseChoice === 'spock'))
    ) {
      return 'win';
    }
    return 'lose';
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

      setTimeout(() => {
        setResult(gameResult);
        if (gameResult === 'win') {
          setScore(score + 1);
        } else if (gameResult === 'lose' && score > 0) {
          setScore(score - 1);
        } else if (gameResult === 'DRAW') {
          setScore(score);
        }
      }, 2000)
      
    }, 2000);
  }

  const handlePLayAgain = () => {
    setUserChoice(null);
    setHouseChoice(null);
    setResult(null);
  }

  return (
    <div className={`game ${result ? 'gameResult' : ''}`}>
      <div className='makeChoice'>
        <div className={`choice ${userChoice ? 'hidden' : ''}`}>
          {choices.map((choice) => (
            <ChoiceButton 
              key={choice} 
              choice={choice}
              onClick={handleChoice}
            />
          ))}
        </div>
      </div>
      {userChoice && (
        <div>
          <div className='result'>
            <div className='choice-info user-choice'>
              <span>You picked</span>
              <div className={`choice-wrapper ${result === 'win' ? 'win' : ''}`}>
                <ChoiceButton 
                  choice={userChoice} 
                  userChoice={userChoice} 
                  />
              </div>
            </div>
            <div className={result ? 'result-info' : 'hidden'}>
              <h1>{result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'DRAW'}</h1>
              <button className='btn-play-again' onClick={handlePLayAgain}>Play Again</button>
            </div>

            <div className='choice-info house-choice'>
              <span>The house picked</span>
              <div className={`choice-wrapper ${result === 'lose' ? 'win' : ''}`}>
                {houseChoice 
                  ? <ChoiceButton 
                    choice={houseChoice} 
                    houseChoice={houseChoice} 
                    />
                  : <div className='no-selected'></div>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Game