/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWeightInput = {
  id?: string | null,
  userId: string,
  weight: number,
};

export type ModelWeightConditionInput = {
  userId?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  and?: Array< ModelWeightConditionInput | null > | null,
  or?: Array< ModelWeightConditionInput | null > | null,
  not?: ModelWeightConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Weight = {
  __typename: "Weight",
  id: string,
  userId: string,
  weight: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWeightInput = {
  userId?: string | null,
  weight?: number | null,
};

export type DeleteWeightInput = {
  id: string,
};

export type ModelWeightFilterInput = {
  userId?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  and?: Array< ModelWeightFilterInput | null > | null,
  or?: Array< ModelWeightFilterInput | null > | null,
  not?: ModelWeightFilterInput | null,
};

export type ModelWeightConnection = {
  __typename: "ModelWeightConnection",
  items?:  Array<Weight | null > | null,
  nextToken?: string | null,
};

export type CreateWeightMutationVariables = {
  input: CreateWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type CreateWeightMutation = {
  createWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWeightMutationVariables = {
  input: UpdateWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type UpdateWeightMutation = {
  updateWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWeightMutationVariables = {
  input: DeleteWeightInput,
  condition?: ModelWeightConditionInput | null,
};

export type DeleteWeightMutation = {
  deleteWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWeightQueryVariables = {
  id: string,
};

export type GetWeightQuery = {
  getWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWeightsQueryVariables = {
  filter?: ModelWeightFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeightsQuery = {
  listWeights?:  {
    __typename: "ModelWeightConnection",
    items?:  Array< {
      __typename: "Weight",
      id: string,
      userId: string,
      weight: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWeightSubscription = {
  onCreateWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWeightSubscription = {
  onUpdateWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWeightSubscription = {
  onDeleteWeight?:  {
    __typename: "Weight",
    id: string,
    userId: string,
    weight: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
