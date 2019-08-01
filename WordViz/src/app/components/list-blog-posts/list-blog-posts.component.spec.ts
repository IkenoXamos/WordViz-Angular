import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogPostsComponent } from './list-blog-posts.component';

describe('ListBlogPostsComponent', () => {
  let component: ListBlogPostsComponent;
  let fixture: ComponentFixture<ListBlogPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBlogPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
