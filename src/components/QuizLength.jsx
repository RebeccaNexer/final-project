import { useSelector } from "react-redux";

export const QuizLength = () => {
  const length = useSelector(
    (state) => state.quiz.questions.length);

    const index = useSelector(
    (state) => state.quiz.currentQuestionIndex);
    
  return (
    <div>
      <h3>Fråga: {index + 1} av {length}</h3>
    </div>
  );
};
