import { Component } from '@angular/core';

@Component({

    selector: 'copyright',
    template: `
        <p><small>@ {{ano+' - '+autor}}</small></p>
    `,
    styles: [
        `
            p {
                margin-top: 2em;
                color: green;
                font-style: italic;
            }
        `
    ]
})
export class CopyrightComponent {

    ano: number = 2019;
    autor: string = 'PUC Minas';

    constructor() {

        this.ano = 2018;
        this.autor = "PUC Minas";

    }


}