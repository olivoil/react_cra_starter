export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type SetThemeVariables = {
  id: string;
};

export type SetThemeMutation = {
  __typename?: 'Mutation';

  setTheme: string;
};

export type GetThemeTypeVariables = {};

export type GetThemeTypeQuery = {
  __typename?: 'Query';

  theme: Maybe<GetThemeTypeTheme>;
};

export type GetThemeTypeTheme = {
  __typename?: 'Theme';

  id: string;
};

import gql from 'graphql-tag';
import * as ReactApolloHooks from 'react-apollo-hooks';

// ====================================================
// Components
// ====================================================

export const SetThemeDocument = gql`
  mutation SetTheme($id: String!) {
    setTheme(id: $id) @client
  }
`;
export function useSetTheme(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SetThemeMutation,
    SetThemeVariables
  >
) {
  return ReactApolloHooks.useMutation<SetThemeMutation, SetThemeVariables>(
    SetThemeDocument,
    baseOptions
  );
}
export const GetThemeTypeDocument = gql`
  query GetThemeType {
    theme @client {
      id
    }
  }
`;
export function useGetThemeType(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetThemeTypeVariables>
) {
  return ReactApolloHooks.useQuery<GetThemeTypeQuery, GetThemeTypeVariables>(
    GetThemeTypeDocument,
    baseOptions
  );
}

// ====================================================
// Types
// ====================================================

export interface Query {
  theme?: Maybe<Theme>;
}

export interface Theme {
  id: string;
}

export interface Mutation {
  setTheme: string;
}

// ====================================================
// Arguments
// ====================================================

export interface SetThemeMutationArgs {
  id: string;
}

import { GraphQLResolveInfo } from 'graphql';

import { MyContext } from '../context';

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface QueryResolvers<TContext = MyContext, TypeParent = {}> {
  theme?: QueryThemeResolver<Maybe<Theme>, TypeParent, TContext>;
}

export type QueryThemeResolver<
  R = Maybe<Theme>,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface ThemeResolvers<TContext = MyContext, TypeParent = Theme> {
  id?: ThemeIdResolver<string, TypeParent, TContext>;
}

export type ThemeIdResolver<
  R = string,
  Parent = Theme,
  TContext = MyContext
> = Resolver<R, Parent, TContext>;

export interface MutationResolvers<TContext = MyContext, TypeParent = {}> {
  setTheme?: MutationSetThemeResolver<string, TypeParent, TContext>;
}

export type MutationSetThemeResolver<
  R = string,
  Parent = {},
  TContext = MyContext
> = Resolver<R, Parent, TContext, MutationSetThemeArgs>;
export interface MutationSetThemeArgs {
  id: string;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export type IResolvers<TContext = MyContext> = {
  Query?: QueryResolvers<TContext>;
  Theme?: ThemeResolvers<TContext>;
  Mutation?: MutationResolvers<TContext>;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
