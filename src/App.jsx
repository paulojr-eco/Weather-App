import React, { useState } from "react";
import Search from "./components/Search/Search";
import History from "./components/History/History";

import "./App.css";

/**
 * @export
 * @component
 * @name App
 *
 * @description
 * Responsável por englobar as componentes que fazem parte da aplicação
 */
const App = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className="container">
      <Search update={update} onUpdate={setUpdate} />
      <History update={update} />
    </div>
  );
};

export default App;
