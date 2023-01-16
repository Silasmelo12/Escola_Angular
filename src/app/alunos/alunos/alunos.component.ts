import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { AlunosService } from './../services/alunos.service';
import { Aluno } from './../model/aluno';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit  {

  alunos$: Observable<Aluno[]>;

  //alunos: Aluno[] = [];
  displayedColumns = ['numeroIncricao', 'nome',  'contato', 'rg', 'data_nasicmento',
   'endereco', 'bolsista', 'genero', 'estadoCivil', 'raca']

   //alunosService: AlunosService;


  constructor(
    private alunosService: AlunosService,
    public dialog:MatDialog
  ){
    //this.alunosService = new AlunosService();
    this.alunos$ = this.alunosService.listAlunos()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar alunos.')
          return of([])
      })
    );
//    this.alunos = [];
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
