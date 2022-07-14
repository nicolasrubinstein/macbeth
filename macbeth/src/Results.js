import React, { useEffect, useState } from "react";
import "./index.css";
import { Grid } from "react-loader-spinner";

const Results = ({ char, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="wrapper">
      <div className="results">
        {isLoading && (
          <section className="loader">
            <p>Analizando resultados...</p>
            <Grid color="#00BFFF" height={100} width={100} />
          </section>
        )}
        {!isLoading && (
          <section className="content">
            <div className="close-wrap">
              <button className="close" onClick={onClose}>
                Cerrar
              </button>
            </div>
            <h2>Sos...</h2>
            <h2 className="name">¡{char}!</h2>
            <img src={`${char}.png`} alt={char} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Results;
