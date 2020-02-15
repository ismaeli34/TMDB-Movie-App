import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieListModule } from './movie-list/movie-list.module';
import { Movie, MovieList } from './model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showFiller = false;
  movieList = MovieList;

  constructor(private router: Router){ 

  }

  ngOnInit(): void {


  }

  navigate(menu){
    console.log("Menu",menu );
    if(menu['name']==="Popular Movie"){
      this.router.navigate(['/popular-movies'])

    }

    if(menu['name']==="Top Rated Movie"){
      this.router.navigate(['/top-rated-movies'])

    }

    if(menu['name']==="Favourite Movie"){
      this.router.navigate(['/favourite-movies'])

    }

  }
  


  

}
