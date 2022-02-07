
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    questions: [Questions]
    testCount: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    user: [User]
}

  type Questions {
    _id: ID
    createdAt: String
    user: String
    answers: [Int!]! 
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

  type Checkout {
    session: ID
}

  type Query {
    getUsers: [User]
    getTests(username: String!): [Questions]
    getNotes(username: String): [Note]
    user(username: String!): User
    me: User
    order(_id: ID!): Order
    checkout(tutors: [ID]!): Checkout
  }

  type Mutation {
    addOrder(tutors: [ID]!): Order
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    loginName(username: String!, password: String!): Auth
    addTest(answers: [Int]! ): Questions
    addNote(questionsId: ID!, noteText: String!):Questions
    removeNote(questionId: ID!, noteId: ID!): Questions
  }
`;

module.exports = typeDefs;
