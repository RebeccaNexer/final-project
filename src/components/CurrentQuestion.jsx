import { useSelector, useDispatch } from "react-redux";
import { QuizLength } from "./QuizLength";
import { quiz } from "../reducers/quiz";
import { Summary } from "./Summary";
import { Snowflakes } from "./Snowflakes";
export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  
  var disable = useSelector(
    (state) => state.quiz.answers.find((d) => (d.questionId === question.id))
  );

  if (quizOver) {
    return (<Summary />)  
  }
  
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

const nextQuestion = () => {
  document.getElementById('answer').innerHTML = "";
  dispatch(quiz.actions.goToNextQuestion())
};
const answerOptions = (questionId, answerIndex) => {

  dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))

  if (question.correctAnswerIndex === answerIndex) {

    document.getElementById(`${answerIndex}`).style.border = '4px dotted green';
    document.getElementById('answer').innerHTML = "Korrekt!";
  } else {
    document.getElementById(`${answerIndex}`).style.border = '4px dotted red';
    if(question.correctAnswerIndex === 0) {
      document.getElementById('answer').innerHTML = "Fel svar! Korrekt svar är alternativ 1";
    } else if (question.correctAnswerIndex === 1) {
      document.getElementById('answer').innerHTML = "Fel svar! Korrekt svar är alternativ X";
    } else {
      document.getElementById('answer').innerHTML = "Fel svar! Korrekt svar är alternativ 2";
    }
  }
};
  return (
    <div className="container">
    <Snowflakes />
      <h1>Julquiz 🎄</h1>
      <h2>{question.questionText}</h2>

      <div className="answers">
      {question.options.map((option, index) => {
            return (
              <button
                type="button"
                className="buttons"
                id={index}
                disabled={disable}
                key={option}
                onClick={() => answerOptions(question.id, index)}>
                {option}
              </button>        
            )
          })}
        <p id="answer" className="font-bold"></p>
      </div>
  <div className="next">
  <button onClick={nextQuestion} className="font-bold">Nästa julfråga</button>
  </div>
  <div className="length">
    <QuizLength />
  </div>

    </div>
  );
};
