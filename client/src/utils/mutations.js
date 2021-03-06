import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!,$username2: String!, $email: String!, $password: String!) {
    addUser(username: $username, username2: $username2,email: $email, password: $password) {
      token
      user {
        _id
        username
        username2
      }
    }
  }
`;

export const ADD_GFP = gql`
  mutation addGFP($goalTitle: String!, $loveFilter: String!) {
    addGFP(goalTitle: $thoughtText, loveFilter: $loveFilter) {
      _id
      goalTitle
      loveFilter
    }
  }
`;

export const ADD_LOVE_LANGUAGE = gql`
  mutation addLoveLanguage($username: String!,$username2: String!, $loveLanguage1: String!, $loveLanguage2: String!) {
    addLoveLanguage(username: $username, username2: $username2, loveLanguage1: $loveLanguage1, loveLanguage2: $loveLanguage2,) {
      user {
        _id
        username
        username2
        loveLanguage1
        loveLanguage2
      }
    }
  }
`;