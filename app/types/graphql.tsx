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
  emotion: Emotion;
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
  emotion: Emotion;
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
  latestMood: MoodType;
  mood: MoodType;
  moods: Array<MoodType>;
};


export type QueryMoodArgs = {
  id: Scalars['Int'];
};

export type AddMoodMutationVariables = Exact<{
  data: AddMoodInputType;
}>;


export type AddMoodMutation = { __typename?: 'Mutation', addMood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any, description: string, createdAt: any } };

export type LatestMoodQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestMoodQuery = { __typename?: 'Query', latestMood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any } };

export type MoodQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MoodQuery = { __typename?: 'Query', mood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any } };

export type MoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'MoodType', id: number, emotion: Emotion, date: any }> };


export const AddMoodDocument = gql`
    mutation AddMood($data: AddMoodInputType!) {
  addMood(data: $data) {
    id
    emotion
    date
    description
    createdAt
  }
}
    `;
export type AddMoodMutationFn = Apollo.MutationFunction<AddMoodMutation, AddMoodMutationVariables>;

/**
 * __useAddMoodMutation__
 *
 * To run a mutation, you first call `useAddMoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMoodMutation, { data, loading, error }] = useAddMoodMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddMoodMutation(baseOptions?: Apollo.MutationHookOptions<AddMoodMutation, AddMoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMoodMutation, AddMoodMutationVariables>(AddMoodDocument, options);
      }
export type AddMoodMutationHookResult = ReturnType<typeof useAddMoodMutation>;
export type AddMoodMutationResult = Apollo.MutationResult<AddMoodMutation>;
export type AddMoodMutationOptions = Apollo.BaseMutationOptions<AddMoodMutation, AddMoodMutationVariables>;
export const LatestMoodDocument = gql`
    query LatestMood {
  latestMood {
    id
    emotion
    date
  }
}
    `;

/**
 * __useLatestMoodQuery__
 *
 * To run a query within a React component, call `useLatestMoodQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMoodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMoodQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestMoodQuery(baseOptions?: Apollo.QueryHookOptions<LatestMoodQuery, LatestMoodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestMoodQuery, LatestMoodQueryVariables>(LatestMoodDocument, options);
      }
export function useLatestMoodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestMoodQuery, LatestMoodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestMoodQuery, LatestMoodQueryVariables>(LatestMoodDocument, options);
        }
export type LatestMoodQueryHookResult = ReturnType<typeof useLatestMoodQuery>;
export type LatestMoodLazyQueryHookResult = ReturnType<typeof useLatestMoodLazyQuery>;
export type LatestMoodQueryResult = Apollo.QueryResult<LatestMoodQuery, LatestMoodQueryVariables>;
export const MoodDocument = gql`
    query Mood($id: Int!) {
  mood(id: $id) {
    id
    emotion
    date
  }
}
    `;

/**
 * __useMoodQuery__
 *
 * To run a query within a React component, call `useMoodQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMoodQuery(baseOptions: Apollo.QueryHookOptions<MoodQuery, MoodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodQuery, MoodQueryVariables>(MoodDocument, options);
      }
export function useMoodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodQuery, MoodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodQuery, MoodQueryVariables>(MoodDocument, options);
        }
export type MoodQueryHookResult = ReturnType<typeof useMoodQuery>;
export type MoodLazyQueryHookResult = ReturnType<typeof useMoodLazyQuery>;
export type MoodQueryResult = Apollo.QueryResult<MoodQuery, MoodQueryVariables>;
export const MoodsDocument = gql`
    query Moods {
  moods {
    id
    emotion
    date
  }
}
    `;

/**
 * __useMoodsQuery__
 *
 * To run a query within a React component, call `useMoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoodsQuery(baseOptions?: Apollo.QueryHookOptions<MoodsQuery, MoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodsQuery, MoodsQueryVariables>(MoodsDocument, options);
      }
export function useMoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodsQuery, MoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodsQuery, MoodsQueryVariables>(MoodsDocument, options);
        }
export type MoodsQueryHookResult = ReturnType<typeof useMoodsQuery>;
export type MoodsLazyQueryHookResult = ReturnType<typeof useMoodsLazyQuery>;
export type MoodsQueryResult = Apollo.QueryResult<MoodsQuery, MoodsQueryVariables>;