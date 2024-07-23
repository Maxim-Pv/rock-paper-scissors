import React from 'react'

const Rules = ({active, setActive}) => {
  return (
    <div className={active ? 'rules active' : 'rules'} onClick={() => setActive(false)}>
      <div className="rules-content" onClick={(e) => e.stopPropagation()}>
        <div className='rules-title'>
          <span className='rules-text'>rules</span>
          <button className='btn-close-rules' onClick={() => setActive(false)}></button>
        </div>
        <div className='rules-img'></div>
      </div>
    </div>
  )
}

export default Rules