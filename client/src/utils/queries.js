
import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
    }
  }
  `;
 
export const QUERY_USER_TESTS = gql`
query getTests ($username: String!) {
  user(username: $username){
    questions{
        _id
        createdAt
        user
        answers
        notes{
          _id
          noteText
          createdAt
        }
      }
  }
}
  `;

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
