import { useDispatch, useSelector } from 'react-redux';
import { quiz } from '../reducers/quiz';

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  return (
    <div className="container">
        <h3>Du fick {correctAnswers} rätt av 6 julfrågor!</h3>
        <p className="santa">🎅🏻🎅🏻🎅🏻🎅🏻🎅🏻🎅🏻</p>
        <button type="button" className="font-bold" onClick={() => dispatch(quiz.actions.restart())}>Börja om</button> 
    </div>
  )
};