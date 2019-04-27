import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarefaComponent } from './tarefa.component';
import { TarefasComponent } from './tarefas.component';
import { ProjetosComponent } from './projetos.component';
import { CopyrightComponent } from './copyright.component';

import { ProjetosService } from './projetos.service';
import { TarefasService } from './tarefas.service';
import { PaginaInvalidaComponent } from './paginainvalida.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaComponent,
    ProjetosComponent,
    CopyrightComponent,
    PaginaInvalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TarefasService,
    ProjetosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
