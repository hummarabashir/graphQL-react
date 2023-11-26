import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import "./state.css";

// const client = new ApolloClient({ uri: "http://localhost:4000" });

const GET_STATE_DATA = gql`
  query GetStateData($stateCode: String!) {
    usaMapData(stateCode: $stateCode) {
      id
      name
      stateCode
    }
  }
`;

const StateInfo = () => {
  const location = useLocation();
  const stateCode = location.state.stateCode;

  //   return <h1>{stateCode}</h1>;
  // const [selectedState, setSelectedState] = useState("");
  const { loading, error, data } = useQuery(GET_STATE_DATA, {
    variables: { stateCode: stateCode },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  if (data && data.usaMapData) {
    return (
      <div className="landing-page-container">
        <h1>STATE INFORMATION</h1>
        <p>{data.usaMapData.id}</p>
        <p>StateName: {data.usaMapData.name}</p>
        <p>StateCode: {data.usaMapData.stateCode}</p>
        <div className="header-link-container">
          <Link to="/" className="header-link">
            Back to State Selector
          </Link>
        </div>
      </div>
    );
  }
};

export default StateInfo;
