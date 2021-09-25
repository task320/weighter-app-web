/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWeight = /* GraphQL */ `
  mutation CreateWeight(
    $input: CreateWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    createWeight(input: $input, condition: $condition) {
      id
      userId
      weight
      createdAt
      updatedAt
    }
  }
`;
export const updateWeight = /* GraphQL */ `
  mutation UpdateWeight(
    $input: UpdateWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    updateWeight(input: $input, condition: $condition) {
      id
      userId
      weight
      createdAt
      updatedAt
    }
  }
`;
export const deleteWeight = /* GraphQL */ `
  mutation DeleteWeight(
    $input: DeleteWeightInput!
    $condition: ModelWeightConditionInput
  ) {
    deleteWeight(input: $input, condition: $condition) {
      id
      userId
      weight
      createdAt
      updatedAt
    }
  }
`;
