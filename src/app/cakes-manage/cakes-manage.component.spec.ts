import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesManageComponent } from './cakes-manage.component';

describe('CakesManageComponent', () => {
  let component: CakesManageComponent;
  let fixture: ComponentFixture<CakesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
