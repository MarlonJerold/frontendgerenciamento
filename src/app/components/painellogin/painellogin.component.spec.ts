import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelloginComponent } from './painellogin.component';

describe('PainelloginComponent', () => {
  let component: PainelloginComponent;
  let fixture: ComponentFixture<PainelloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelloginComponent]
    });
    fixture = TestBed.createComponent(PainelloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
