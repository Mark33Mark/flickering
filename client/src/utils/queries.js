
import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query allProfiles {
    profiles {
      _id
      username
      email
      testCount
    }
  }
`;


export const QUERY_USERS = gql`
  query singleProfile( $profileId: ID! ) {
    profile( profileId: $profileId ) {
      _id
      username
      email
      testCount
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
