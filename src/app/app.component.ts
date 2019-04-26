import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <input #n="ngModel" [(ngModel)]="nome" type="text"
        required minlength="3"/>
      <span [hidden]="n.valid" style="color: red">
        <span [hidden]="!n.errors?.required">
          O nome é obrigatório
        </span>
        <span [hidden]="!n.errors?.minlength">
          O nome deve ter no mínimo {{n.erros?.minlength?.requiredLength}} caracteres
        </span>
        <span><pre>{{n.errors | json}}</pre></span>
      </span>
    </p>
    <p>Nome: {{nome}}</p>
    `
})
export class AppComponent {

  nome: string = '';

}
