import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulatedPostComponent } from './tabulated-post.component';

describe('TabulatedPostComponent', () => {
  let component: TabulatedPostComponent;
  let fixture: ComponentFixture<TabulatedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabulatedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulatedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
