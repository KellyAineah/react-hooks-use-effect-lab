import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);


  useEffect(() => {
    // If timeRemaining is 0, reset it and call onAnswered(false)
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return; 
    }
  
    // Set up the timeout to decrease timeRemaining after 1 second
    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
  
    // Cleanup function to clear timeout
    return () => clearTimeout(timerId);
  
  }, [timeRemaining, onAnswered]); 




  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
