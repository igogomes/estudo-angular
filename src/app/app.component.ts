import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    input[type="text"] {

      pading: 5px;
      border: this solid #999;

    }
    .ng-touched.ng-valid {
      border-left: thick solid #0c0;
    }
    .ng-touched.ng-invalid {
      border-left: thick solid #c00;
    }
  `],
  template: `
    <p>
      <label>Nome</label>
      <input #n="ngModel" [(ngModel)]="nome" type="text"
        required minlength="3"/>
      <span [hidden]="n.valid || n.untouched" style="color: red">
        <span [hidden]="!n.errors?.required">
          O nome é obrigatório
        </span>
        <span [hidden]="!n.errors?.minlength">
          O nome deve ter no mínimo {{n.erros?.minlength?.requiredLength}} caracteres
        </span>
      </span>
    </p>
    <p>
          valid: {{n.valid}}<br/>
          invalid: {{n.invalid}}<br/>
          pristine: {{n.pristine}}<br/>
          dirty: {{n.dirty}}<br/>
          touched: {{n.touched}}<br/>
          untouched: {{n.untouched}}<br/>
        </p>
    <p>Nome: {{nome}}</p>
    `
})
export class AppComponent {

  nome: string = '';

}
