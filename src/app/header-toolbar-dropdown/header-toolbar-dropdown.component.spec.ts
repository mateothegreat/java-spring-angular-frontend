import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolbarDropdownComponent } from './header-toolbar-dropdown.component';

describe('HeaderToolbarDropdownComponent', () => {
  let component: HeaderToolbarDropdownComponent;
  let fixture: ComponentFixture<HeaderToolbarDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderToolbarDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToolbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
