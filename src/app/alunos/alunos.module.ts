import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
    //MatFormFieldModule
  ]
})
export class AlunosModule { }
