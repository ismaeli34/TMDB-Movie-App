import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-toprated-movie-detail',
  templateUrl: './toprated-movie-detail.component.html',
  styleUrls: ['./toprated-movie-detail.component.css']
})
export class TopratedMovieDetailComponent implements OnInit {


  movie: any;
  similarMovies: Array<any> = [];
  cast: any;
  video: any;
  isLoading = true;
  loading:boolean = false;

  @ViewChild('closeModal', { static: false }) public  closeModal: ElementRef;
  @ViewChild('openModal', { static: false }) public  openModal: ElementRef;

  constructor(
    private _moviesService: RestapiService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
  ) {
    
  }

  ngOnInit() {

    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {

        const id = params['id'];
        console.log("ID",id);
        this.getMovie(id);
        this.getMovieCredits(id);
        this.getMovieVideo(id);
        this.getRecomendedMovie(id);
      }
    );

   
  }

  getMovie(id) {
    this.loading = true;

    const movieSubs = this._moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;
        this.loading =false;



        if (!this.movie) {
          alert('Server Error')
        } else {
          this.isLoading = false;
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
  }

  getMovieCredits(id) {
    this.loading = true;

    const movieCreditsSubs = this._moviesService.getMovieCredits(id).subscribe(
      res => {
        // console.log(res);
        res.cast = res.cast.filter( item => { return item.profile_path });
        this.cast = res.cast.slice(0, 5);
        this.loading = false;

      }, () => {},
      () => { if (movieCreditsSubs) { movieCreditsSubs.unsubscribe() } }
    );
  }

  getMovieVideo(id) {
    this.loading = true;

    const movieVideosSubs = this._moviesService.getMovieVideos(id).subscribe(
      res => {
        if (res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
          this.loading = false;

        }
      }, () => {},
      () => { if (movieVideosSubs) { movieVideosSubs.unsubscribe() } }
    );
  }

  getRecomendedMovie(id) {
    this.loading = true;

    const recomendedMoviesSubs = this._moviesService.getRecomendMovies(id).subscribe(
      res => {
        this.similarMovies = res.results.slice(0, 8);
        this.similarMovies.forEach(np => np['isMovie'] = true);
        this.loading = false;

      }, () => {},
      () => { if (recomendedMoviesSubs) { recomendedMoviesSubs.unsubscribe() } }
    );
  }

  // Seo tags



  // openDialog(): void {
  //   this.dialog.open(AppMovieDialogComponent, {
  //     height: '500px',
  //     width: '800px',
  //     data: { video: this.video}
  //   });
  // }

}
