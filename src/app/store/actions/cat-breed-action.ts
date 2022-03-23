import { Action } from '@ngrx/store';
import { CatBreeds } from '../../models/cat-breeds.model';

export enum GetCatBreedActionTypes {
    GET_CAT_BREED = '[GET] Get Cat Breeds',
    GET_CAT_BREED_SUCCESS = '[GET] Cat Breeds Success',
    GET_CAT_BREED_FAIL = '[Get] Cat Breeds Fail',
}

export class GetCatBreedAction implements Action {
    readonly type = GetCatBreedActionTypes.GET_CAT_BREED;
}

export class GetCatBreedSuccessAction implements Action {
    readonly type = GetCatBreedActionTypes.GET_CAT_BREED_SUCCESS;
    constructor(public payload: CatBreeds[]){}
}

export class GetCatBreedFailAction implements Action {
    readonly type = GetCatBreedActionTypes.GET_CAT_BREED_FAIL;
    constructor(public payload?: string) {}
}

export type CatBreedActions = 
GetCatBreedAction |
GetCatBreedSuccessAction |
GetCatBreedFailAction;

