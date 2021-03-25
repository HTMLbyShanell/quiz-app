import React, { useState } from 'react';
import Footer from './footer'

export default function App() {
	const questions = [
		{
			questionText: 'What planet does it rain diamonds?',
			answerOptions: [
				{ answerText: 'Jupiter', isCorrect: false },
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Neptune', isCorrect: true },
				{ answerText: 'Venus', isCorrect: false },
			],
		},
		{
			questionText: 'How many moons does Mars have?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '0', isCorrect: false },
			],
		},
		{
			questionText: 'What planet has poisonous clouds?',
			answerOptions: [
				{ answerText: 'Venus', isCorrect: true },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: false },
			],
		},
		{
			questionText: 'How long does it take sunlight to reach the Earth?',
			answerOptions: [
				{ answerText: '30 seconds', isCorrect: false },
				{ answerText: '1 hour', isCorrect: false },
				{ answerText: '2 minutes', isCorrect: false },
				{ answerText: '8 minutes', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<React.Fragment>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</React.Fragment>
			)}
      <Footer/>
		</div>
	);
}