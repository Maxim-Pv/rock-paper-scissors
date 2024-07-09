import React from 'react'

const ChoiceButton = ({choice, onClick, userChoice, houseChoice}) => {
  const handleChoice = (choice) => {
    if (userChoice || houseChoice) return
    onClick(choice)
  }
  return (
    <button 
      className={`choice-btn ${choice} ${userChoice || houseChoice ? 'selected' : ''}`} 
      onClick={() => handleChoice(choice)}
      >
    </button>
  )
}

export default ChoiceButton