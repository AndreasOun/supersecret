
import React from 'react';
import Option from './Option';

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
