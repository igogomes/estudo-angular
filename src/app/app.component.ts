import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="box" 
      (mouseover)="ativa()"
      (mouseout)="desativa()"
      (mousemove)="movimenta($event)"
      [class.sobre]="ativado">
    </div>
    <p>Coordenadas: {{coords}}</p>
    `,
    styles: [`
      #box {
        width: 150px;
        height: 150px;
        border: thin solid black;
      }
      .sobre  {
        background-color: red;
      }
    `]
})
export class AppComponent {

  ativado: boolean = false;
  coords: string = '';
  ativa(): void {
    this.ativado = true;
  }
  desativa(): void {
    this.ativado = false;
  }

  movimenta(e): void {

    this.coords = "(" + e.clientX + ", " + e.clientY + ")";

  }

}
