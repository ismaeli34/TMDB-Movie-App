import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { LoaderComponent } from '../shared/loader/loader.component';
import { NgxLoadingModule } from 'ngx-loading';




@NgModule({
  declarations: [TopRatedMoviesComponent,LoaderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgxLoadingModule.forRoot({})

  ]
})
export class TopRatedMoviesModule { }
