import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostsGridComponent } from './posts-grid.component';

describe('PostsGridComponent', () => {
  let component: PostsGridComponent;
  let fixture: ComponentFixture<PostsGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
