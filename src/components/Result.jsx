import React from 'react'
import './Result.scss'

const Result = ({ answers, totalQuestions }) => {
  const correctAnswers = answers.filter((answer) => answer).length
  const percentage = (correctAnswers / totalQuestions) * 100

  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>
        You answered {correctAnswers} out of {totalQuestions} questions correctly.
      </p>
      <p>Your score: {percentage}%</p>
      <button className='bg-purple-500 w-24 text-white rounded' onClick={() =>{window.location.reload()}}>Restart</button>
    </div>
  )
}

export default Result
