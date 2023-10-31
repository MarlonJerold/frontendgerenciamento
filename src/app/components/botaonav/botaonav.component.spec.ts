import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaonavComponent } from './botaonav.component';

describe('BotaonavComponent', () => {
  let component: BotaonavComponent;
  let fixture: ComponentFixture<BotaonavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaonavComponent]
    });
    fixture = TestBed.createComponent(BotaonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
