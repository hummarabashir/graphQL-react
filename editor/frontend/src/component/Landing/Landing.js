// import React from "react";
// import { ApolloProvider } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// // import App from "./App.js";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

// const CApp = () => {
//   return (
//     <ApolloProvider client={client}>
//       <h1>hello</h1>
//     </ApolloProvider>
//   );
// };

// export default CApp;

import React from "react";
import USAMap from "react-usa-map";
import { useNavigate } from "react-router-dom";

import "./Landing.css";

const CApp = () => {
  // const mapHandler = (event) => {
  //   const stateCode = event.target.dataset.name;
  //   setSelectedState(stateCode);
  // };
  const navigate = useNavigate();

  const mapHandler = (event) => {
    let stateName = event.target.innerHTML
      .replace("<title>", "")
      .replace("</title>", "");
    navigate("/state", {
      state: { stateName: stateName, stateCode: event.target.dataset.name },
    });
  };
  return (
    <>
      <h2>Click on a state to view its information</h2>
      <div className="landing-page-container">
        {/* <h1>GraphQL State Explorer National Map</h1> */}
        {/* <svg
        viewBox="0 0 200 200"
        height="450"
        width="1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M43.8,-66.2C51,-55.2,46.9,-34.5,53.4,-16.8C59.8,0.9,76.8,15.7,77.3,28.5C77.8,41.4,61.8,52.3,46.2,63C30.6,73.7,15.3,84.2,2.1,81.3C-11.1,78.4,-22.1,62.1,-36.7,51C-51.3,39.9,-69.3,34.2,-74.9,22.9C-80.5,11.7,-73.7,-5,-60.7,-11.8C-47.6,-18.7,-28.4,-15.6,-17.2,-25.3C-6.1,-35,-3,-57.5,7.7,-68C18.4,-78.6,36.7,-77.2,43.8,-66.2Z"
          transform="translate(100 100)"
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="16"
        >
          GraphQL State Explorer
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="16"
        >
          National Map
        </text>
      </svg> */}
        <div class="blob">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
        <h1>
          GraphQL State <br /> Explorer
          <br />
          National Map
        </h1>
        <USAMap onClick={mapHandler} defaultFill="rgb(247, 166, 15)" />
      </div>
    </>
  );
};

export default CApp;

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <CApp />
//   </ApolloProvider>,

//   document.getElementById("root")
// );
