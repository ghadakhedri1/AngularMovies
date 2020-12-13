import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLikeComponent } from './movie-like.component';

describe('MovieLikeComponent', () => {
  let component: MovieLikeComponent;
  let fixture: ComponentFixture<MovieLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
