import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedMovieDetailComponent } from './toprated-movie-detail.component';

describe('TopratedMovieDetailComponent', () => {
  let component: TopratedMovieDetailComponent;
  let fixture: ComponentFixture<TopratedMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratedMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratedMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
