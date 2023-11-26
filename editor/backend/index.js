// import { ApolloServer, gql } from "apollo-server";
// import typeDefs from "./typeDefs";
// import resolvers from "./resolvers";

// module.exports = (done = () => {}) => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   server.start({}, ({ port }) => {
//     console.log(
//       `👷‍ [Editor Graph API]: Listening on http://localhost:${port}/`
//     );
//     done(port);
//   });
// };

import { ApolloServer, gql } from "apollo-server";
import { usaMapData } from "./Data.js";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
// const usaMapData = [
//   { id: 1, name: "Alabama", stateCode: "AL" },
//   { id: 2, name: "Alaska", stateCode: "AA" },
//   { id: 3, name: "Arizona", stateCode: "AZ" },
//   // ... other states
// ];

// Define your GraphQL schema
// const typeDefs = gql`
//   type State {
//     id: ID!
//     name: String!
//     stateCode: String!
//   }

//   type Query {
//     usaMapData(stateCode: String!): State
//   }
// `;

// Define your resolvers
// const resolvers = {
//   Query: {
//     usaMapData: (parent, args, context) => {
//       const { usaMapData } = context;
//       if (!usaMapData) {
//         throw new Error("usaMapData is not available");
//       }
//       const state = usaMapData.find(
//         (state) => state.stateCode === args.stateCode
//       );
//       return state;
//     },
//   },
// };

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    usaMapData,
  },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
