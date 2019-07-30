import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryChaptersComponent } from './new-story-chapters.component';

describe('NewStoryChaptersComponent', () => {
  let component: NewStoryChaptersComponent;
  let fixture: ComponentFixture<NewStoryChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
