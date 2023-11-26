const typeDefs = `
type State {
  id: ID!
  name: String!
  stateCode: String!
}

type Query {
  usaMapData(stateCode: String!): State
}
`;
export default typeDefs;
