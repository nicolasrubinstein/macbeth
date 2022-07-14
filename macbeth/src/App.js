import React from "react";
import { useState } from "react";
import QuestionSet from "./QuestionSet";
import { mode, questions } from "./utils";
import "./index.css";
import Results from "./Results";

const App = () => {
  const [values, setValues] = useState({});
  const [result, setResult] = useState("");
  const [showResults, setShowResults] = useState(false);
  const submitForm = () => {
    const array = Object.values(values);
    if (array.length < 7) {
      alert("Por favor, completá todas las preguntas del quiz.");
      return;
    }
    setResult(mode(array));
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setShowResults(true);
    setValues({});
  };

  return (
    <>
      {showResults && (
        <Results char={result} onClose={() => setShowResults(false)} />
      )}
      <div className="container">
        <h1>¿Qué personaje de Macbeth sos?</h1>
        {questions.map(({ q, answers, n }) => {
          return (
            <>
              <QuestionSet
                key={n}
                q={q}
                ansArr={answers}
                values={values}
                setValues={setValues}
                n={n}
              />
            </>
          );
        })}
        <button onClick={submitForm}>Terminar quiz</button>
      </div>
    </>
  );
};

export default App;
