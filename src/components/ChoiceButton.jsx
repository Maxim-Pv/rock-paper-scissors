import React from 'react'

const ChoiceButton = ({choice, onClick, userChoice, houseChoice}) => {
  const handleChoice = (choice) => {
    if (userChoice || houseChoice) return
    onClick(choice)
  }

  const selected = (userChoice || houseChoice) ? 'selected' : '';

  return (
    <button 
      className={`choice-btn ${choice} ${selected} `} 
      onClick={() => handleChoice(choice)}
      >
    </button>
  )
}

export default ChoiceButton