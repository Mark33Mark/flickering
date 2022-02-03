
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    questions: [Questions]
    testCount: Int
  }
  type Questions{
    _id: ID
    answers: [Int!]! 
    user: String
    createdAt: String
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
    user(username: String!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTest(answers: [Int]! ): Questions
  }
`;

module.exports = typeDefs;
