import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsShowComponent } from './blogs-show.component';

describe('BlogsShowComponent', () => {
  let component: BlogsShowComponent;
  let fixture: ComponentFixture<BlogsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
