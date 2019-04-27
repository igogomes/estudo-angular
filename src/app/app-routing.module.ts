import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { TarefasComponent } from './tarefas.component';
import { PaginaInvalidaComponent } from './paginainvalida.component';


const routes: Routes = [
  {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
  {path: 'projetos', component: ProjetosComponent },
  {path: 'tarefas', component: TarefasComponent },
  {path: '**', component: PaginaInvalidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }