
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    tests: [Tracker]
    testCount: Int
  }
  type Tracker {
    _id: ID
    answers: [Int!]! 
    createdAt: String,
    notes: [Note]
  }
  type Note {
    _id: ID
    noteText: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTest(answers: [Int!]! ): Tracker
  }
`;

module.exports = typeDefs;
