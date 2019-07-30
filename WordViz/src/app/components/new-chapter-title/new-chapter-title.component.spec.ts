import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChapterTitleComponent } from './new-chapter-title.component';

describe('NewChapterTitleComponent', () => {
  let component: NewChapterTitleComponent;
  let fixture: ComponentFixture<NewChapterTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChapterTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChapterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
