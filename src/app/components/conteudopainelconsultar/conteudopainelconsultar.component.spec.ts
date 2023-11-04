import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudopainelconsultarComponent } from './conteudopainelconsultar.component';

describe('ConteudopainelconsultarComponent', () => {
  let component: ConteudopainelconsultarComponent;
  let fixture: ComponentFixture<ConteudopainelconsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteudopainelconsultarComponent]
    });
    fixture = TestBed.createComponent(ConteudopainelconsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
