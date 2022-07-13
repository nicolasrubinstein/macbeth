import React from "react";
import { useState } from "react";
const questions = [
  {
    q: "Te gustaría obtener un ascenso en el trabajo ¿Qué harías?",
    a1: "Sabotear a tu jefe para que lo despidan y obtener su puesto",
    a2: "Convencer a tus colegas para que se revelen contra su jefe",
    a3: "Esperar pacientemente con trabajo y esfuerzo",
    a4: "Vos ya sos el jefe",
    a5: "Presentando ideas innovadoras y creativas",
  },
  {
    q: "¿A cuál de estos lugares preferís ir a comer?",
    a1: "Burger King",
    a2: "Wendys",
    a3: "Mostaza",
    a4: "Mc Donals",
    a5: "KFC",
  },
  {
    q: "¿Cuál es tu materia preferida?",
    a1: "Educación Física",
    a2: "Ciencias Políticas",
    a3: "TOK",
    a4: "Historia",
    a5: "Matemática",
  },
  {
    q: "Si descubís que tu pareja te fue infiel…",
    a1: "Buscás al amante de tu pareja y lo/la agarrás a trompadas",
    a2: "Nada. Están a mano",
    a3: "Lo/la perdonás y le proponés matrimonio",
    a4: "Le cortás",
    a5: "Toma venganza",
  },
  {
    q: "¿A dónde te gustaría ir de vacaciones?",
    a1: "Roma",
    a2: "El Caribe",
    a3: "Disney",
    a4: "Grecia",
    a5: "Rusia",
  },
  {
    q: "¿De qué signo sos o con cuál de estos signos tenés afinidad?",
    a1: "Cáncer",
    a2: "Sagitario",
    a3: "Escorpio",
    a4: "Leo",
    a5: "Capricornio",
  },
  {
    q: "¿Cuál es tu recurso de estilo favorito?",
    a1: "Técnicas narrativas",
    a2: "Figuras retóricas",
    a3: "Maniobras narrativas",
    a4: "Narrador y foco",
    a5: "Los elementos sintácticos y gramaticales",
  },
];

const App = () => {
  const getName = (num) => {
    if (num == 1) {
      return "";
    }
  };
  function mode(array) {
    if (array.length == 0) return null;
    var modeMap = {};
    var maxEl = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }
  const [values, setValues] = useState([]);

  const submitAnswer = (num) => {
    setValues([...values, num]);
    console.log(values);
  };
  return (
    <div>
      <h1>Sos... {mode(values)}</h1>

      <h1>¿Qué personaje de Macbeth sos?</h1>
      {questions.map((question) => {
        return (
          <>
            <h4>{question.q}</h4>
            <p onClick={() => submitAnswer("1")}>{question.a1}</p>
            <p onClick={() => submitAnswer("2")}>{question.a2}</p>
            <p onClick={() => submitAnswer("3")}>{question.a3}</p>
            <p onClick={() => submitAnswer("4")}>{question.a4}</p>
            <p onClick={() => submitAnswer("5")}>{question.a5}</p>
          </>
        );
      })}
    </div>
  );
};

export default App;
