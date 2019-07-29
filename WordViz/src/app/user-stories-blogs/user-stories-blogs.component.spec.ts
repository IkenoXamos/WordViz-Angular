import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoriesBLogsComponent } from './user-stories-blogs.component';

describe('UserStoriesBLogsComponent', () => {
  let component: UserStoriesBLogsComponent;
  let fixture: ComponentFixture<UserStoriesBLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoriesBLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoriesBLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
