import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRegistersComponent } from './details-registers.component';

describe('DetailsRegistersComponent', () => {
  let component: DetailsRegistersComponent;
  let fixture: ComponentFixture<DetailsRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
