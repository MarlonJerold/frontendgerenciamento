import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulopadraoComponent } from './titulopadrao.component';

describe('TitulopadraoComponent', () => {
  let component: TitulopadraoComponent;
  let fixture: ComponentFixture<TitulopadraoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitulopadraoComponent]
    });
    fixture = TestBed.createComponent(TitulopadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
