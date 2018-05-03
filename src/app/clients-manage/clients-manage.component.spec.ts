import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsManageComponent } from './clients-manage.component';

describe('ClientsManageComponent', () => {
  let component: ClientsManageComponent;
  let fixture: ComponentFixture<ClientsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
