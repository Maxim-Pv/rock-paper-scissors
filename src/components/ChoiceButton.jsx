import React from 'react'

const ChoiceButton = ({choice, onClick}) => {
  console.log(choice);
  return (
    <button className={`choice-btn ${choice}`} onClick={() => onClick(choice)}>
    </button>
  )
}

export default ChoiceButton