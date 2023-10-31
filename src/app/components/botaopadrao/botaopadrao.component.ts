import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botaopadrao',
  templateUrl: './botaopadrao.component.html',
  styleUrls: ['./botaopadrao.component.css']
})
export class BotaopadraoComponent  implements OnInit{
  @Input() variante: string = "primario";

  constructor(){}

  ngOnInit(){}
}
