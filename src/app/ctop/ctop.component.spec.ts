import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTOPComponent } from './ctop.component';

describe('CTOPComponent', () => {
  let component: CTOPComponent;
  let fixture: ComponentFixture<CTOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
