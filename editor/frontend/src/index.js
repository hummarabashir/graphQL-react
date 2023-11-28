import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import Landing from "./component/Landing/Landing";
import StateInfo from "./component/State/StateInfo";
// import "./index.css";

const client = new ApolloClient({ uri: "http://localhost:4000" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/state" element={<StateInfo />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);
