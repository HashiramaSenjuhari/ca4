import React, { useState } from 'react'
import QuestionBox from './components/QuizBox'
import Result from './components/Result'
import { Questions } from './Questions'
import './App.scss'

const App = () => {
  const [darkMode,setDarkMode] = useState(false)
  const [currentQuestions,setCurrentQuestions] = useState(1)
  const [answers,setAnswers] = useState([])
  const toggleAction = () =>{
    setDarkMode(!darkMode)
  }
  const handleAnswer = (isCorrect) => {
    console.log('isCorrect:', isCorrect);
    setAnswers([...answers, isCorrect]);
    setCurrentQuestions(currentQuestions+ 1)
  }
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className='w-full h-24 pl-[61vw] pt-[1.7vw] relative'>
      <button onClick={toggleAction} className='p-[1vw] bg-purple-500 text-[1vw] font-semibold rounded text-white'>
        {darkMode?'Light Mode':'Dark Mode'}
      </button>
      </header>
        {currentQuestions <= Questions.length ? (
          <>
          <QuestionBox
          currentQuestion={currentQuestions}
          totalQuestions={Questions.length}
          questions={Questions}
          handleAnswer={handleAnswer}
          
        />
          </>

        
        ):(
          <Result answers={answers} totalQuestions={Questions.length} />
        )}
    </div>
  )
}

export default App