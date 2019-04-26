import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p><input #n id="nome" name="nome" type="text"/></p>
    <p><button (click)="enviar(n.value)">Enviar</button></p>
    <p>Nome: {{nome}}</p>
    `
})
export class AppComponent {

  nome: string = '';
 enviar(n): void {
  this.nome = n;
 }

}
