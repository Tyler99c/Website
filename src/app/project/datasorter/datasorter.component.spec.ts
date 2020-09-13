import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasorterComponent } from './datasorter.component';

describe('DatasorterComponent', () => {
  let component: DatasorterComponent;
  let fixture: ComponentFixture<DatasorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
