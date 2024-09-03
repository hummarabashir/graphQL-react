<h1>GraphQL+React Explorer (JSON & API)</h1>

<h2>Details 📜</h2>
:arrow_right: Set up backend server in node ( `localhost:4000/` ) in `backend/index.js`.<br/>
:arrow_right: React application is set up using webpack and babel ( that runs webpack-dev-server for the frontend on `localhost:8080` )<br/>
:arrow_right: The schema and graphQl queries are created in `schema.js`<br/>
:arrow_right: fetch data using Foursquare API, in the created queries. ( e.g. API URL: `https://api.foursquare.com/v3/places/search?query=` )<br/>
:arrow_right: GraphiQL playground is available on `localhost:4000/`.<br/>
:arrow_right: We have used Apollo Client to build UI in React that fetches data from GraphQL<br/>
:arrow_right: React components are created and wrapped them inside `<ApolloProvider>` and apollo `client` is then passed to these components.<br/>
:arrow_right: Reach router is used to create routes for landing and state pages.<br/>
:arrow_right: The `graphql-tag` ( graphQl query parsing utility ) is installed and `gpl` is imported from it. The `gpl` parses GraphQL query strings into the standard GraphQL AST.<br/>
:arrow_right: Use `gpl` to query the data in front react app, from the schema we have create in our node application in backend.<br/>
:arrow_right: We have displayed all the data received as response of the query on home page( `Landing.js` ).<br/>
:arrow_right: When user request for a particular state, we query that state by its id and display it on an individual page `State.js`<br/> 
( e.g. We redirect the user on url `http://localhost:3000/state`, when request for state with different individual id )<br/>

## To install dependencies:

```bash
npm install
```

To run:

```bash
npm run start
```
This will start backend, frontend and GraphQL Playground.

## Built With :zap:

1. Node
2. React
3. GraphQL
4. Appollo Client
5. Foursquare API
6. Postman
