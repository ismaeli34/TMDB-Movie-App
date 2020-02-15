import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';
import { LoadingScreenService } from '../services/loading-screen.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  movieList = [];
  image: string;
  public loading = false;

  constructor(private restApiService: RestapiService,
    private router:Router,private loaderService:LoadingScreenService
    ) { }

  ngOnInit() {
    this.getTopRatedMovies();

  }


  getTopRatedMovies():void{


      this.loading = true;

    this.restApiService.getTopRatedMovies().subscribe(x=>{
 
      this.movieList = x.results;
      this.loading = false;
      console.log("Movie List",this.movieList);
    })

  }


  navigateToTopRatedMovieDetail(id){
    // console.log("Top rated movies",id);
    this.router.navigate(['top-rated-detail',id]);
  }

}
