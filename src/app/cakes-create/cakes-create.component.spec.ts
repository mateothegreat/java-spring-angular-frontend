import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesCreateComponent } from './cakes-create.component';

describe('CakesCreateComponent', () => {
  let component: CakesCreateComponent;
  let fixture: ComponentFixture<CakesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
