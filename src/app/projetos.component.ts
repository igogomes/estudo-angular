import { Component } from '@angular/core';
import { Projeto, ProjetosService } from './projetos.service';

@Component({

    selector: 'projetos',
    template: `
        <h1> Projetos </h1>
        <ul>
            <li *ngFor="let p of projetos">
                {{p.codigo}} - {{p.projeto}}
            </li>
        </ul>

    `

})

export class ProjetosComponent {

    projetos: Projeto[] = [];

    constructor(public ps: ProjetosService) {

        this.projetos = ps.getProjetos();

    }

}