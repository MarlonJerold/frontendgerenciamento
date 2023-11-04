import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelhomemainComponent } from './painelhomemain.component';

describe('PainelhomemainComponent', () => {
  let component: PainelhomemainComponent;
  let fixture: ComponentFixture<PainelhomemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelhomemainComponent]
    });
    fixture = TestBed.createComponent(PainelhomemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
