
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login( $email: String!, $password: String! ) {
    login( email: $email, password: $password ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER_NAME = gql`
  mutation loginName( $username: String!, $password: String! ) {
    loginName( username: $username, password: $password ) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( $username: String!, $email: String!, $password: String! ) {
    addUser( username: $username, email: $email, password: $password ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TEST = gql`
  mutation addTest( $answers: [Int]!) {
    addTest( answers: $answers) {
      _id
      answers
      user
      createdAt
      notes{
        _id
        noteText
        createdAt
      }
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($questionId: ID!, $noteText: String!) {
    addNote(questionId: $questionId, noteText: $noteText) {
      _id
      answers
      user
      createdAt
      notes {
        _id
        noteText
      }
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($questionId: ID!, $noteId: ID!) {
    removeNote(questionId: $questionId, noteId: $noteId) {
      _id
      answers
      user
      createdAt
      notes {
        _id
        noteText
      }
    }
  }
`;