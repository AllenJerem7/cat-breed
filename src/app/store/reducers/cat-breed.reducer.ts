import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CatBreeds } from 'src/app/models/cat-breeds.model';
import {GetCatBreedActionTypes, CatBreedActions} from '../actions/cat-breed-action';

export interface CatBreedState {
    catBreeds: CatBreeds[],
    loading: boolean,
    error?: string | any;
}

const initialState: CatBreedState = {
    catBreeds: [],
    loading: false,
    }

export const catBreedsKey = 'catBreed';

export function CatBreedReducer(state: CatBreedState = initialState, action: CatBreedActions){
 switch(action.type){
    case GetCatBreedActionTypes.GET_CAT_BREED:
        return {
            ...state,
            loading: true
        }
    case GetCatBreedActionTypes.GET_CAT_BREED_SUCCESS:
        return {
            ...state, 
            catBreeds: action.payload,
            loading: false
        }
    case GetCatBreedActionTypes.GET_CAT_BREED_FAIL:
        return {
            ...state, 
            error: action.payload,
            loading: false
        }
    default: 
        return state;
 }   
}

export const selectIsLoading = (state: CatBreedState) => state.loading;
export const selectCatBreeds = (state: CatBreedState) => state.catBreeds;
export const selectError = (state: CatBreedState) => state.error;