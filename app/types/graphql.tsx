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

export type DatasetOutputType = {
  __typename?: 'DatasetOutputType';
  yesterday: Scalars['Int'];
  today: Scalars['Int'];
};


export type DeleteMoodInputType = {
  id: Scalars['Int'];
};

export type EditMoodInputType = {
  id: Scalars['Int'];
  emotion: Emotion;
  date: Scalars['DateTime'];
  description: Scalars['String'];
};

export enum Emotion {
  Happy = 'HAPPY',
  Anxious = 'ANXIOUS',
  Tired = 'TIRED',
  Sad = 'SAD',
  Angry = 'ANGRY'
}

export type FitnessType = {
  __typename?: 'FitnessType';
  steps: DatasetOutputType;
  heartRate: DatasetOutputType;
};

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
  deleteMood: Scalars['Boolean'];
  editMood: MoodType;
  addMood: MoodType;
  saveRefreshToken: UserType;
};


export type MutationDeleteMoodArgs = {
  data: DeleteMoodInputType;
};


export type MutationEditMoodArgs = {
  data: EditMoodInputType;
};


export type MutationAddMoodArgs = {
  data: AddMoodInputType;
};


export type MutationSaveRefreshTokenArgs = {
  data: SaveRefreshTokenInputType;
};

export type Query = {
  __typename?: 'Query';
  fitness: FitnessType;
  latestMood: MoodType;
  mood: MoodType;
  moods: Array<MoodType>;
  profile: UserType;
};


export type QueryMoodArgs = {
  id: Scalars['Int'];
};

export type SaveRefreshTokenInputType = {
  authToken: Scalars['String'];
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  pictureUrl: Scalars['String'];
  lastLogin: Scalars['DateTime'];
  refreshToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type AddMoodMutationVariables = Exact<{
  data: AddMoodInputType;
}>;


export type AddMoodMutation = { __typename?: 'Mutation', addMood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any } };

export type DeleteMoodMutationVariables = Exact<{
  data: DeleteMoodInputType;
}>;


export type DeleteMoodMutation = { __typename?: 'Mutation', deleteMood: boolean };

export type EditMoodMutationMutationVariables = Exact<{
  data: EditMoodInputType;
}>;


export type EditMoodMutationMutation = { __typename?: 'Mutation', editMood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any, description: string, createdAt: any } };

export type FitnessQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FitnessQueryQuery = { __typename?: 'Query', fitness: { __typename?: 'FitnessType', steps: { __typename?: 'DatasetOutputType', today: number, yesterday: number }, heartRate: { __typename?: 'DatasetOutputType', today: number, yesterday: number } } };

export type LatestMoodQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestMoodQuery = { __typename?: 'Query', latestMood: { __typename?: 'MoodType', id: number, emotion: Emotion, description: string, date: any } };

export type MoodQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MoodQuery = { __typename?: 'Query', mood: { __typename?: 'MoodType', id: number, emotion: Emotion, date: any } };

export type MoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'MoodType', id: number, emotion: Emotion, date: any }> };

export type SaveRefreshTokenMutationVariables = Exact<{
  data: SaveRefreshTokenInputType;
}>;


export type SaveRefreshTokenMutation = { __typename?: 'Mutation', saveRefreshToken: { __typename?: 'UserType', id: number, refreshToken: string } };


export const AddMoodDocument = gql`
    mutation AddMood($data: AddMoodInputType!) {
  addMood(data: $data) {
    id
    emotion
    date
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
export const DeleteMoodDocument = gql`
    mutation DeleteMood($data: DeleteMoodInputType!) {
  deleteMood(data: $data)
}
    `;
export type DeleteMoodMutationFn = Apollo.MutationFunction<DeleteMoodMutation, DeleteMoodMutationVariables>;

/**
 * __useDeleteMoodMutation__
 *
 * To run a mutation, you first call `useDeleteMoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMoodMutation, { data, loading, error }] = useDeleteMoodMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteMoodMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMoodMutation, DeleteMoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMoodMutation, DeleteMoodMutationVariables>(DeleteMoodDocument, options);
      }
export type DeleteMoodMutationHookResult = ReturnType<typeof useDeleteMoodMutation>;
export type DeleteMoodMutationResult = Apollo.MutationResult<DeleteMoodMutation>;
export type DeleteMoodMutationOptions = Apollo.BaseMutationOptions<DeleteMoodMutation, DeleteMoodMutationVariables>;
export const EditMoodMutationDocument = gql`
    mutation EditMoodMutation($data: EditMoodInputType!) {
  editMood(data: $data) {
    id
    emotion
    date
    description
    createdAt
  }
}
    `;
export type EditMoodMutationMutationFn = Apollo.MutationFunction<EditMoodMutationMutation, EditMoodMutationMutationVariables>;

/**
 * __useEditMoodMutationMutation__
 *
 * To run a mutation, you first call `useEditMoodMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMoodMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMoodMutationMutation, { data, loading, error }] = useEditMoodMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditMoodMutationMutation(baseOptions?: Apollo.MutationHookOptions<EditMoodMutationMutation, EditMoodMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMoodMutationMutation, EditMoodMutationMutationVariables>(EditMoodMutationDocument, options);
      }
export type EditMoodMutationMutationHookResult = ReturnType<typeof useEditMoodMutationMutation>;
export type EditMoodMutationMutationResult = Apollo.MutationResult<EditMoodMutationMutation>;
export type EditMoodMutationMutationOptions = Apollo.BaseMutationOptions<EditMoodMutationMutation, EditMoodMutationMutationVariables>;
export const FitnessQueryDocument = gql`
    query FitnessQuery {
  fitness {
    steps {
      today
      yesterday
    }
    heartRate {
      today
      yesterday
    }
  }
}
    `;

/**
 * __useFitnessQueryQuery__
 *
 * To run a query within a React component, call `useFitnessQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFitnessQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFitnessQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFitnessQueryQuery(baseOptions?: Apollo.QueryHookOptions<FitnessQueryQuery, FitnessQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FitnessQueryQuery, FitnessQueryQueryVariables>(FitnessQueryDocument, options);
      }
export function useFitnessQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FitnessQueryQuery, FitnessQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FitnessQueryQuery, FitnessQueryQueryVariables>(FitnessQueryDocument, options);
        }
export type FitnessQueryQueryHookResult = ReturnType<typeof useFitnessQueryQuery>;
export type FitnessQueryLazyQueryHookResult = ReturnType<typeof useFitnessQueryLazyQuery>;
export type FitnessQueryQueryResult = Apollo.QueryResult<FitnessQueryQuery, FitnessQueryQueryVariables>;
export const LatestMoodDocument = gql`
    query LatestMood {
  latestMood {
    id
    emotion
    description
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
export const SaveRefreshTokenDocument = gql`
    mutation SaveRefreshToken($data: SaveRefreshTokenInputType!) {
  saveRefreshToken(data: $data) {
    id
    refreshToken
  }
}
    `;
export type SaveRefreshTokenMutationFn = Apollo.MutationFunction<SaveRefreshTokenMutation, SaveRefreshTokenMutationVariables>;

/**
 * __useSaveRefreshTokenMutation__
 *
 * To run a mutation, you first call `useSaveRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveRefreshTokenMutation, { data, loading, error }] = useSaveRefreshTokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<SaveRefreshTokenMutation, SaveRefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveRefreshTokenMutation, SaveRefreshTokenMutationVariables>(SaveRefreshTokenDocument, options);
      }
export type SaveRefreshTokenMutationHookResult = ReturnType<typeof useSaveRefreshTokenMutation>;
export type SaveRefreshTokenMutationResult = Apollo.MutationResult<SaveRefreshTokenMutation>;
export type SaveRefreshTokenMutationOptions = Apollo.BaseMutationOptions<SaveRefreshTokenMutation, SaveRefreshTokenMutationVariables>;