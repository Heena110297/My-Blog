import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrecautionsComponent } from './add-edit-precautions.component';

describe('AddEditPrecautionsComponent', () => {
  let component: AddEditPrecautionsComponent;
  let fixture: ComponentFixture<AddEditPrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPrecautionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
