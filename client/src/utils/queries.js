
import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      questions{
        _id
        answers
        createdAt
      }
    }
  }
  `;


export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
