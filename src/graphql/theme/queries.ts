import gql from 'graphql-tag';

export const GET_THEME = gql`
  query GetTheme {
    theme @client {
      id
    }
  }
`;
