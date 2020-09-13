import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeistleComponent } from './beistle.component';

describe('BeistleComponent', () => {
  let component: BeistleComponent;
  let fixture: ComponentFixture<BeistleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeistleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeistleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
