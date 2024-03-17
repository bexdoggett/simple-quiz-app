import Quiz from "./Quiz";
import { quizData } from "./constants";

function App() {
  return <Quiz questions={ quizData.questions} />;
}

export default App
