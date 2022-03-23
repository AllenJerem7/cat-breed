import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatBreeds } from 'src/app/models/cat-breeds.model';
import { GetCatBreedAction } from 'src/app/store/actions/cat-breed-action';
import * as fromSelector from '../../store/selectors/cat-breed.selector';
import * as fromStore from '../../store/reducers/cat-breed.reducer';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  catBreeds$: Observable<CatBreeds[]>;
  loading$: Observable<Boolean>;
  cols: any[];

  constructor(private store: Store<fromStore.CatBreedState>) {
  }

  ngOnInit(): void {
    this.loadCatBreedData();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'image', header: 'Image' },
      { field: 'description', header: 'Description' },
      { field: 'origin', header: 'Origin' }
  ];
  }

  loadCatBreedData() {
    this.store.dispatch(new GetCatBreedAction());
    this.catBreeds$ = this.store.select(fromSelector.catBreedsSelector);
    this.loading$ = this.store.select(fromSelector.isLoading);
  }

}
