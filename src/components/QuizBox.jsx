import React, { useState, useEffect } from 'react'
import './QuizBox.scss'

const QuestionBox = ({ currentQuestion, totalQuestions, questions, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [highLight,setHighLight] = useState(false)

  const handleOptionClick = (isCorrect) => {
    if (!selectedOption) {
      setSelectedOption(isCorrect)
      handleAnswer(isCorrect)
    }
  }
  const highLightAction = () =>{
    setHighLight(!highLight)
    console.log('hld')
  }
  const RemovehighLightAction = () =>{
    setHighLight(!highLight)
    console.log('nhld')
  }
  useEffect(() => {
    setSelectedOption(null)
  }, [currentQuestion])

  return (
    <div className="quizBox">
      <div className='box-main'>
        <p className='question-num'>
          Question: {currentQuestion} out of {totalQuestions}
        </p>
        <p className={`question ${highLight ? 'highlight' : 'removed'}`}>{questions[currentQuestion - 1].text}</p>
        <div className="options">
          {questions[currentQuestion - 1].options.map((option) => (
            <div
              key={option.id}
              className={`option ${selectedOption === option.isCorrect ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.isCorrect)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex pl-[40vw] gap-[2vw] absolute bottom-12'>
          <button className='bg-orange-400 w-28 text-[0.8vw] font-semibold p-3 text-white rounded-md'
          onClick={highLightAction}
          >HighLight</button>
          <button className='bg-orange-400 text-[0.8vw] font-semibold p-3 text-white rounded-md'
          onClick={RemovehighLightAction}
          >Remove HighLight</button>
          </div>
    </div>
  );
};

export default QuestionBox

