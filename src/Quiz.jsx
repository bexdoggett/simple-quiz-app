import { useState } from "react";
import { resultInitalState } from "./constants";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnwswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            score: prev.score - 1,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  // Tailwind Styles
  const choiceStyle = "p-2 rounded-xl cursor-pointer";
  const defaultChoiceStyle = `${choiceStyle} bg-gray-200 border-gray-200 hover:shadow-xl hover:bg-gray-400 hover:border-gray-400`;
  const selectedChoiceStyle = `${choiceStyle} bg-gray-700 border-gray-700 text-white`;

  return (
    <div className="flex items-center p-8 w-full min-h-screen">
        <div className="bg-white rounded-xl shadow-md mx-auto w-96 max-w-full p-5 space-y-3">
        {!showResult ? (
            <>
            <div>
                <span className="text-green-600 text-2xl text-bold">{currentQuestion + 1}</span>
                <span className="text-gray-400">/{questions.length}</span>
            </div>
            <h2 className="font-sans text-xl font-semibold">{question}</h2>
            <ul className="space-y-2">
                { Object.entries(choices).map(([key, value], index) => (
                <li
                    onClick={() => onAnwswerClick(key, index)}
                    key={ key }
                    className={answerIdx === index ? selectedChoiceStyle : defaultChoiceStyle }
                >
                    {key}. { value }
                </li>
                ))}
            </ul>
            <div className="flex items-end">
                <button className="select-none font-sans font-bold text-center uppercase transition-all 
                ml-auto text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10
                disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  
                hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none 
                active:opacity-[0.85] active:shadow-none"
                onClick={onClickNext} disabled={answerIdx === null}>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
            </>
        ) : (
            <>
                <h2 className="font-sans text-xl font-semibold">Result</h2>
                <ul className="space-y-2">
                    <li className="flex justify-between">
                        <span className="text-gray-700">Total Questions:</span> 
                        <span className="font-semibold">{questions.length}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Total Score:</span> 
                        <span className="font-semibold">{result.score}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Correct Answers:</span> 
                        <span className="font-semibold">{result.correctAnswers}</span>
                    </li>
                    <li className="flex justify-between">
                        <span className="text-gray-700">Wrong Answers:</span> 
                        <span className="font-semibold">{result.wrongAnswers}</span>
                    </li>
                </ul>
                <div className="flex items-end">
                    <button className="select-none font-sans font-bold text-center uppercase transition-all 
                    ml-auto text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10
                    disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  
                    hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none 
                    active:opacity-[0.85] active:shadow-none"
                    onClick={onTryAgain}>Try again</button>
                </div>
            </>
        )}
        </div>
    </div>
  );
};

export default Quiz;
