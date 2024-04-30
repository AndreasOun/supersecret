// Quiz.js
import React, { useState } from 'react';
import quizData from '../data/quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-container">
          <h2>Your Score</h2>
          <p>{score} / {quizData.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{quizData[currentQuestion].text}</h2>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
