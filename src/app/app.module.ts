import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatBreedEffects } from './store/effects/cat-breed.effect';
import * as fromReducer from './store/reducers/cat-breed.reducer';
import { NgPrimeModule } from './app.ngprime.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgPrimeModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromReducer.catBreedsKey, fromReducer.CatBreedReducer),
    EffectsModule.forFeature([CatBreedEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
