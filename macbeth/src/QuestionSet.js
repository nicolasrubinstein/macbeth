import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

const QuestionSet = ({ q, ansArr, setValues, values, n }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const changeAns = (ans, i) => {
    const valuesCopy = values;
    setSelectedIndex(i);
    valuesCopy[n.toString()] = ans.char;
    setValues(valuesCopy);
  };

  useEffect(() => {
    console.log(values);
    if (!values[n.toString()]) {
      setSelectedIndex(null);
    }
  }, [values]);

  return (
    <div className="qSet">
      <h4>{q}</h4>
      {ansArr.map((ans, i) => {
        return (
          <p
            className={`answer ${selectedIndex === i && " selected"}`}
            onClick={() => changeAns(ans, i)}
          >
            {ans.text}
          </p>
        );
      })}
    </div>
  );
};

export default QuestionSet;
