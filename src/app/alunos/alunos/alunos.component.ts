import { AlunosService } from './../services/alunos.service';
import { Aluno } from './../model/aluno';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit  {

  alunos: Observable<Aluno[]>;
  //alunos: Aluno[] = [];
  displayedColumns = ['numeroIncricao', 'nome',  'contato', 'rg', 'data_nasicmento',
   'endereco', 'bolsista', 'genero', 'estadoCivil', 'raca']

   //alunosService: AlunosService;


  constructor(private alunosService: AlunosService){
    //this.alunosService = new AlunosService();
    this.alunos = this.alunosService.listAlunos();
//    this.alunos = [];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
