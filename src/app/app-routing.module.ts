import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { FavouriteMovieComponent } from './favourite-movie/favourite-movie.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopratedMovieDetailComponent } from './toprated-movie-detail/toprated-movie-detail.component';


const routes: Routes = [
  {path: 'popular-movies',component: PopularMoviesComponent},
  {path: 'top-rated-movies',component: TopRatedMoviesComponent},
  {path: 'favourite-movies',component: FavouriteMovieComponent},
  {path:'top-rated-detail/:id',component: TopratedMovieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
