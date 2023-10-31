import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaopadraoComponent } from './botaopadrao.component';

describe('BotaopadraoComponent', () => {
  let component: BotaopadraoComponent;
  let fixture: ComponentFixture<BotaopadraoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaopadraoComponent]
    });
    fixture = TestBed.createComponent(BotaopadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
