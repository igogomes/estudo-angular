import { Component } from '@angular/core';

@Component({
    selector: 'tarefa',
    styles: [`


    
    `],
    template: `
    
        <form #f="ngForm" (ngSubmit)="envia()">

            <p>
                <label for="tarefa">Tarefa: </label>>
                <input #tf="ngModel" type="text [(ngMOdel)] = "tarefa"
                    id="tarefa" name = "tarefa" required/>
                    <span [hidden] = "tf.untouched || tf.valid" style="color: red"
                        A tarefa é obrigatória
                    </span>
            </p>
            <p>
                <label for="prioridade">Prioridade: </label>
                <select [(ngModel)]="

            <button type="submit">Enviar</button>

        </form>
    
    `
})

export class TarefaComponent {

    t:any = {
        tarefa: '',
        prioridade: 2
    }

}