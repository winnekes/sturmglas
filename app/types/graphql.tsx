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

export type AddMoodInputType = {
  mood: Emotion;
  date: Scalars['DateTime'];
  description: Scalars['String'];
};


export enum Emotion {
  Angry = 'ANGRY',
  Sad = 'SAD',
  Neutral = 'NEUTRAL',
  Tired = 'TIRED',
  Happy = 'HAPPY'
}

export type MoodType = {
  __typename?: 'MoodType';
  id: Scalars['Int'];
  mood: Emotion;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMood: MoodType;
};


export type MutationAddMoodArgs = {
  data: AddMoodInputType;
};

export type Query = {
  __typename?: 'Query';
  mood: MoodType;
  moods: Array<MoodType>;
};


export type QueryMoodArgs = {
  id: Scalars['Int'];
};

export type AddMoodMutationMutationVariables = Exact<{
  data: AddMoodInputType;
}>;


export type AddMoodMutationMutation = { __typename?: 'Mutation', addMood: { __typename?: 'MoodType', id: number, mood: Emotion, date: any, description: string, createdAt: any } };

export type MoodQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MoodQueryQuery = { __typename?: 'Query', mood: { __typename?: 'MoodType', id: number, mood: Emotion, date: any } };

export type MoodsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQueryQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'MoodType', id: number, mood: Emotion, date: any }> };


export const AddMoodMutationDocument = gql`
    mutation AddMoodMutation($data: AddMoodInputType!) {
  addMood(data: $data) {
    id
    mood
    date
    description
    createdAt
  }
}
    `;
export type AddMoodMutationMutationFn = Apollo.MutationFunction<AddMoodMutationMutation, AddMoodMutationMutationVariables>;

/**
 * __useAddMoodMutationMutation__
 *
 * To run a mutation, you first call `useAddMoodMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMoodMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMoodMutationMutation, { data, loading, error }] = useAddMoodMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddMoodMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddMoodMutationMutation, AddMoodMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMoodMutationMutation, AddMoodMutationMutationVariables>(AddMoodMutationDocument, options);
      }
export type AddMoodMutationMutationHookResult = ReturnType<typeof useAddMoodMutationMutation>;
export type AddMoodMutationMutationResult = Apollo.MutationResult<AddMoodMutationMutation>;
export type AddMoodMutationMutationOptions = Apollo.BaseMutationOptions<AddMoodMutationMutation, AddMoodMutationMutationVariables>;
export const MoodQueryDocument = gql`
    query MoodQuery($id: Int!) {
  mood(id: $id) {
    id
    mood
    date
  }
}
    `;

/**
 * __useMoodQueryQuery__
 *
 * To run a query within a React component, call `useMoodQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMoodQueryQuery(baseOptions: Apollo.QueryHookOptions<MoodQueryQuery, MoodQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodQueryQuery, MoodQueryQueryVariables>(MoodQueryDocument, options);
      }
export function useMoodQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodQueryQuery, MoodQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodQueryQuery, MoodQueryQueryVariables>(MoodQueryDocument, options);
        }
export type MoodQueryQueryHookResult = ReturnType<typeof useMoodQueryQuery>;
export type MoodQueryLazyQueryHookResult = ReturnType<typeof useMoodQueryLazyQuery>;
export type MoodQueryQueryResult = Apollo.QueryResult<MoodQueryQuery, MoodQueryQueryVariables>;
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