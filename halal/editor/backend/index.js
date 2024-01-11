import React from "react";
import { useEffect, useState } from "react";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Venue {
    id: String!
    name: String!
    location: String!
    locality: String!
    postcode: String!
    region: String!
    closed: String!
    latitude: String!
    longitude: String!
  }

  type Query {
    venues(region: String!): [Venue!]!
  }
`;

const resolvers = {
  Query: {
    venues: async (_, { region }) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.apiKey,
        },
      };
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?query=halal%20restaurant&categoryId=4bf58dd8d48988d1c4941735&near=${region}&limit=50`,
        options
      );
      const data = await response.json();

      // Extract relevant data from the response
      const venues = data.results.map((venue) => ({
        id: venue.fsq_id,
        name: venue.name,
        location: venue.location.address,
        locality: venue.location.locality,
        postcode: venue.location.postcode,
        region: venue.location.region,
        closed: venue.closed_bucket,
        latitude: venue.geocodes.main.latitude,
        longitude: venue.geocodes.main.longitude,
      }));

      return venues;
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: {
  //   data,
  // },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
