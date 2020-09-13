import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragesorterComponent } from './storagesorter.component';

describe('StoragesorterComponent', () => {
  let component: StoragesorterComponent;
  let fixture: ComponentFixture<StoragesorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragesorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragesorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
