import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
    GetCatBreedActionTypes, 
    GetCatBreedAction,
    GetCatBreedSuccessAction,
    GetCatBreedFailAction,
    } from '../actions/cat-breed-action'
import { CatBreedsService } from '../../services/cat-breeds.service';

@Injectable()
export class CatBreedEffects {

    constructor(private service: CatBreedsService, private actions$: Actions) {}

  @Effect() getPosts$ = this.actions$
    .pipe(
      ofType<GetCatBreedAction>(GetCatBreedActionTypes.GET_CAT_BREED),
      mergeMap(
        () => this.service.getCatBreedsData()
          .pipe(
            map(data => {
                return new GetCatBreedSuccessAction(data)
            }),
            catchError(error => of(new GetCatBreedFailAction(error)))
            )
            ),
        )
    }