import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PopularMoviesModule } from './popular-movies/popular-movies.module';
import { FavouriteMovieModule } from './favourite-movie/favourite-movie.module';
import { TopRatedMoviesModule } from './top-rated-movies/top-rated-movies.module';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { TopratedMovieDetailComponent } from './toprated-movie-detail/toprated-movie-detail.component';
import { MatDialogModule } from '@angular/material';
import { PosterCardComponent } from './poster-card/poster-card.component';
import { LoaderComponent } from './shared/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxLoadingModule } from 'ngx-loading';




@NgModule({
  declarations: [
    AppComponent,
    TopratedMovieDetailComponent,
    PosterCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    PopularMoviesModule,
    FavouriteMovieModule,
    TopRatedMoviesModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgxLoadingModule.forRoot({})


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
