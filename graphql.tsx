import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export enum Emotion {
  Angry = 'ANGRY',
  Sad = 'SAD',
  Anxious = 'ANXIOUS',
  Happy = 'HAPPY'
}

export type MoodType = {
  __typename?: 'MoodType';
  id: Scalars['Int'];
  mood: Emotion;
  date: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  moods: Array<MoodType>;
  recipes: Array<MoodType>;
};

export type MoodsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQueryQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'MoodType', id: number, mood: Emotion, date: any }> };


export const MoodsQueryDocument = gql`
    query MoodsQuery {
  moods {
    id
    mood
    date
  }
}
    `;

/**
 * __useMoodsQueryQuery__
 *
 * To run a query within a React component, call `useMoodsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoodsQueryQuery(baseOptions?: Apollo.QueryHookOptions<MoodsQueryQuery, MoodsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodsQueryQuery, MoodsQueryQueryVariables>(MoodsQueryDocument, options);
      }
export function useMoodsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodsQueryQuery, MoodsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodsQueryQuery, MoodsQueryQueryVariables>(MoodsQueryDocument, options);
        }
export type MoodsQueryQueryHookResult = ReturnType<typeof useMoodsQueryQuery>;
export type MoodsQueryLazyQueryHookResult = ReturnType<typeof useMoodsQueryLazyQuery>;
export type MoodsQueryQueryResult = Apollo.QueryResult<MoodsQueryQuery, MoodsQueryQueryVariables>;