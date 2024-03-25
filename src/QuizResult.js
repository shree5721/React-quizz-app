import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
       <h1>Your Score:{props.score}</h1><br/>
        <h1>Total Score:{props.totalScore}</h1>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult