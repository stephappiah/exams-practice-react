import { useState, useEffect } from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results)

      });
    
  });

  return questions.length > 0 ? (
    <div className="container">
 
      
    </div>
    ) :(
      <h1 className='text-2xl text-white font-bold  '>Loading questions...</h1>
    );
  
}

export default App;
