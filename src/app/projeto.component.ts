import { Component } from '@angular/core';
import { Projeto, ProjetosService } from './projetos.service';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'projeto',
    templateUrl: 'projeto.component.html',
    styleUrls: [ 'projeto.component.css' ]

})

export class ProjetoComponent {

    projeto: Projeto;

    constructor(public ts: ProjetosService, public rs: ActivatedRoute) {

        const id = +this.rs.snapshot.paramMap.get('id');
        this.projeto = this.ts.getProjeto(id);

    }

}