import React, { useState } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import USAMap from "react-usa-map";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

const client = new ApolloClient({ uri: "http://localhost:4000" });

const GET_STATE_DATA = gql`
  query GetStateData($stateCode: String!) {
    usaMapData(stateCode: $stateCode) {
      id
      name
      stateCode
    }
  }
`;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/state" element={<StateInfo />} />
      </Routes>
    </Router>
  );
};

const Landing = () => {
  const [selectedState, setSelectedState] = useState("");
  const { loading, error, data } = useQuery(GET_STATE_DATA, {
    variables: { stateCode: selectedState },
  });
  const mapHandler = (event) => {
    const stateCode = event.target.dataset.name;
    setSelectedState(stateCode);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  if (data && data.usaMapData) {
    return (
      <div className="landing-page-container">
        <h1>GraphQL State Explorer National Map</h1>
        <USAMap onClick={mapHandler} defaultFill="rgb(247, 166, 15)" />
      </div>
    );
  }
};

const StateInfo = () => {
  const { data } = useQuery(GET_STATE_DATA, {
    variables: { stateCode: selectedState },
  });

  return (
    <div className="landing-page-container">
      <h1>STATE INFORMATION</h1>
      <ul>
        <li key={data.usaMapData.id}>
          <p>StateName: {data.usaMapData.name}</p>
          <p>StateCode: {data.usaMapData.stateCode}</p>
        </li>
      </ul>
      <div className="header-link-container">
        <Link to="/" className="header-link">
          Back to State Selector
        </Link>
      </div>
    </div>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
