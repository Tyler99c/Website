import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingkettleComponent } from './kingkettle.component';

describe('KingkettleComponent', () => {
  let component: KingkettleComponent;
  let fixture: ComponentFixture<KingkettleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingkettleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingkettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
