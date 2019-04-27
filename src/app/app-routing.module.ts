import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { ProjetoComponent } from './projeto.component';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa.component';
import { PaginaInvalidaComponent } from './paginainvalida.component';


const routes: Routes = [
  {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
  {path: 'projetos', component: ProjetosComponent },
  {path: 'projetos/:id', component: ProjetoComponent },
  {path: 'tarefas', component: TarefasComponent },
  {path: 'tarefas/:id', component: TarefaComponent },
  {path: '**', component: PaginaInvalidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }