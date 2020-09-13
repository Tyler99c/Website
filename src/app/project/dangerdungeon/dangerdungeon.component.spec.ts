import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerdungeonComponent } from './dangerdungeon.component';

describe('DangerdungeonComponent', () => {
  let component: DangerdungeonComponent;
  let fixture: ComponentFixture<DangerdungeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerdungeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerdungeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
