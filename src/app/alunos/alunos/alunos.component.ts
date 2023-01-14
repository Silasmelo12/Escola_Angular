import { Aluno } from './../model/aluno';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent  {

  alunos: Aluno[] = [
    {numeroIncricao: 1,
    nome:'Silas' ,
    contato:'81992337067' ,
    rg:'123' ,
    data_nasicmento:'18/09/1995' ,
    endereco:'Carpina' ,
    senha:'123' ,
    bolsista:'Sim' ,
    genero:'Masculino' ,
    estadoCivil:'Solteiro',
    raca:'Pardo'}];
  displayedColumns = ['numeroIncricao', 'nome',  'contato', 'rg', 'data_nasicmento',
   'endereco', 'senha', 'bolsista', 'genero', 'estadoCivil', 'raca']

  constructor(){
//    this.alunos = [];
  }

}
