import { Component } from '@angular/core';


@Component({
    selector: 'tarefas',
    template: `
        <div [ngSwitch]="grupo">
            <ul *ngSwitchCase="0">
                <li *ngFor="let tarefa of tarefasCasa">{{tarefa}}</li>
            </ul>
            <ul *ngSwitchCase="1">
                <li *ngFor="let tarefa of tarefasTrabalho">{{tarefa}}</li>
            </ul>
            <ul *ngSwitchCase="2">
                <li *ngFor="let tarefa of tarefasOutras">{{tarefa}}</li>
            </ul>
        </div>
    `
})

export class TarefasComponent { 

    tarefasCasa: string[];
    tarefasTrabalho: string[];
    tarefasOutras: string[];
    grupo: number;

    constructor() {
        this.tarefasCasa = [
            'Comprar leite',
            'Pagar conta de luz',
            'Consertar a cafeteira'
        ];
        this.tarefasTrabalho = [
            'Elaborar campanha de marketing',
            'Contratar novos fornecedores'
        ];
        this.tarefasOutras = [ 
                'Criar aplicação com Angular'
        ];
        this.grupo = 0;
    }

}