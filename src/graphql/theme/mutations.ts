import gql from 'graphql-tag';

export const SET_THEME = gql`
  mutation SetTheme($id: String!) {
    setTheme(id: $id) @client
  }
`;
