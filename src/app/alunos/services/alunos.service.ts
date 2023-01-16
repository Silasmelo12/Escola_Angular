import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

import { Aluno } from './../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private httpClient: HttpClient) { }

private readonly API = '/assets/aluno.json';

  list(): Aluno[]{
    return [
      {numeroIncricao: 8345475,
        nome:'Fernando' ,
        contato:'123' ,
        data_nasicmento:'20/02/2010' ,
        endereco:'Carpina' ,
        //senha:'***' ,
        bolsista:'Sim' ,
        genero:'Masculino' ,
        estadoCivil:'Solteiro',
        raca:'Pardo',
        rg:'123' }
    ]
  }

  listAlunos(){
    return this.httpClient.get<Aluno[]>(this.API)
    .pipe(
      first(),
      delay(15000),
      tap(alunos => console.log(alunos))
    );
    return this.httpClient.get<Aluno[]>('http://localhost:8080/alunos/1')
    .pipe(
      tap(alunos => console.log(alunos))
    );;
  }
}
