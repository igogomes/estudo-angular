import { Component } from '@angular/core';
import { TarefasComponent } from '@tarefas.componentes'

@Component({
  selector: 'app-root',
  styles: [`
    .alerta { color: red; }
    .mensagem {
      text-align: center;
    }
  `],
  template: `
    <p [ngClass]="classes()">O campo não pode ficar em branco</p>
    
    <h1>Gestão de Tarefas</h1>
    <tarefas></tarefas>
    
  `
})
export class AppComponent {

  classes(): any {
    return {'alerta': true, 'mensagem': true};
  }

}
