import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTOCComponent } from './ptoc.component';

describe('PTOCComponent', () => {
  let component: PTOCComponent;
  let fixture: ComponentFixture<PTOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTOCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PTOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
