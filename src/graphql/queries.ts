/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWeight = /* GraphQL */ `
  query GetWeight($id: ID!) {
    getWeight(id: $id) {
      id
      userId
      weight
      createdAt
      updatedAt
    }
  }
`;
export const listWeights = /* GraphQL */ `
  query ListWeights(
    $filter: ModelWeightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        weight
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
