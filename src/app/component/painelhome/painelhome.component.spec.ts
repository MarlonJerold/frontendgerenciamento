import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelhomeComponent } from './painelhome.component';

describe('PainelhomeComponent', () => {
  let component: PainelhomeComponent;
  let fixture: ComponentFixture<PainelhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelhomeComponent]
    });
    fixture = TestBed.createComponent(PainelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
