
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
    dateTaken: String,
    answers: [Int] 
    notes: String
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
    addTest(dateTaken: String!, answers: [Int!]): User
  }
`;

module.exports = typeDefs;
