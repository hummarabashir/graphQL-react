import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Landing from "./component/Landing/Landing";
import StateInfo from "./component/State/StateInfo";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/state" element={<StateInfo />} />
      </Routes>
    </main>
  );
};

export default App;
