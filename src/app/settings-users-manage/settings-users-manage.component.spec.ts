import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsersManageComponent } from './settings-users-manage.component';

describe('SettingsUsersManageComponent', () => {
  let component: SettingsUsersManageComponent;
  let fixture: ComponentFixture<SettingsUsersManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsUsersManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
