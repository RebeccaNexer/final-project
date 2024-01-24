// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";

export const CurrentQuestion = () => {
  // const dispatch = useDispatch();
  // const question = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  // );
  
  // if (!question) {
  //   return <h1>Oh no! I could not find the current question!</h1>;
  // }
   return (
    <div className="container">
      <h1>Green Closet Collective</h1>
      <h2>Sök</h2>

  <div className="search">
  {/* <button onClick={nextQuestion} className="font-bold">Nästa julfråga</button>
  </div> */}

  <button className="font-bold">Sök</button>
  </div>
    </div>
  );
};
