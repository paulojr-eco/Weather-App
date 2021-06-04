import React, { useState, useEffect } from "react";
import { getHistory, getTop5 } from "../../services/WeatherApi";

import "./History.css";

const History = ({ update }) => {
  const [top5, setTop5] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    /**
     * @export
     * @function
     * @name setInfo
     *
     * @description
     * Obtenção das informações da cidade para impressão e atualização da página
     */
    const setInfo = async () => {
      let respHistory = await getHistory();
      setHistory(respHistory);
      let respTop = await getTop5();
      setTop5(respTop);
    };
    setInfo();
  }, [update]);

  return (
    <aside>
      <div className="history-container">
        <p>Histórico</p>
        {history &&
          history.map((item) => {
            return (
              <div className="last-city">
                <img
                  src={`https://openweathermap.org/img/w/${item.icon}.png`}
                  alt="imgicon"
                  className="icon"
                />
                {item.city}
              </div>
            );
          })}
      </div>
      <div className="top5-container">
        <p>Cidades Mais Buscadas</p>
        {top5 != null
          ? top5.map((item) => {
              return <div className="top-city">{item.city}</div>;
            })
          : null}
      </div>
    </aside>
  );
};

export default History;
