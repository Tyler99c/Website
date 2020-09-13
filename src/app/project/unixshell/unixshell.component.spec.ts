import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixshellComponent } from './unixshell.component';

describe('UnixshellComponent', () => {
  let component: UnixshellComponent;
  let fixture: ComponentFixture<UnixshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnixshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
