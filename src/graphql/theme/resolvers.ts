import gql from 'graphql-tag';
import { MutationResolvers, QueryResolvers } from '../generated';

export const defaults = {
  theme: {
    __typename: 'Theme',
    id: 'light'
  }
};

export const resolvers = {
  Mutation: {
    setTheme: (parent, { id }, { cache }, info) => {
      cache.writeData({
        data: {
          theme: {
            __typename: 'Theme',
            id
          }
        }
      });

      return id;
    }
  },
  Query: {}
} as {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
};
