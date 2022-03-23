import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { CatBreeds } from '../models/cat-breeds.model';

@Injectable({
  providedIn: 'root'
})
export class CatBreedsService extends BaseApiService{

  private rootUrl: string = '';
    
    constructor(private http: HttpClient) { 
      super();
      this.rootUrl = 'https://api.thecatapi.com/v1'
    }
    
    getCatBreedsData() : Observable<CatBreeds[]> {
      let url = `${this.rootUrl}/breeds`;
        return this.http.get<CatBreeds[]>(url)
        .pipe(catchError(this.handleError));
    }
}
