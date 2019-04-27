import { Injectable } from '@angular/core';

export class Tarefa {

    codigo: number;
    tarefa: string;
    data: Date;
    prioridade: number;
    codigoProjeto: number;

}

@Injectable()
export class TarefasService {

    tarefas: Tarefa[] = [
        {
            codigo: 1,
            tarefa: 'Comprar leite',
            data: new Date(2018,1,15),
            prioridade: 1,
            codigoProjeto: 1
        },
        {
            codigo: 2,
            tarefa: 'Pagar conta',
            data: new Date(2018,1,20),
            prioridade: 2,
            codigoProjeto: 1
        },
        {
            codigo: 3,
            tarefa: 'Realizar conserto',
            data: new Date(2018,2,7),
            prioridade: 3,
            codigoProjeto: 1
        },
        {
            codigo: 4,
            tarefa: 'Realizar contrato',
            data: new Date(2018,3,20),
            prioridade: 2,
            codigoProjeto: 2
        },
        {
            codigo: 5,
            tarefa: 'Planejar companha',
            data: new Date(2018,2,25),
            prioridade: 1,
            codigoProjeto: 2
        }
    ];

    getTarefas(): Tarefa[] {

        return this.tarefas;

    }

}