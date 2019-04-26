import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <input #n [(ngModel)]="nome" type="text"/>
      <span *ngIf="n.value.length<3">
        O nome deve ter no mínimo 3 caracteres
      </span>
    </p>
    <p>Nome: {{nome}}</p>
    `
})
export class AppComponent {

  nome: string = '';

}
