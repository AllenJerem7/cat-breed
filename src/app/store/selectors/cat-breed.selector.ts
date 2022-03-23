import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from '../reducers/cat-breed.reducer';

const productsSelector = createFeatureSelector<fromStore.CatBreedState>(fromStore.catBreedsKey);

export const isLoading = createSelector(productsSelector, fromStore.selectIsLoading);
export const catBreedsSelector = createSelector(productsSelector, fromStore.selectCatBreeds);
export const error = createSelector(productsSelector, fromStore.selectError);