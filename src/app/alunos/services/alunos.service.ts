import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Aluno } from './../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private httpClient: HttpClient) { }

//private readonly API = '/assets/aluno.json';
private readonly API = 'api/alunos';

  list(): Aluno[]{
    return [
      {numeroIncricao: 8345475,
        nome:'Fernando' ,
        contato:'123' ,
        data_nasicmento:'20/02/2010' ,
        endereco:'Carpina' ,
        //senha:'***' ,
        bolsista:true ,
        genero:'Masculino' ,
        estadoCivil:'Solteiro',
        raca:'Pardo',
        RG:'123' }
    ]
  }

  listAlunos(){
    return this.httpClient.get<Aluno[]>(this.API)
    .pipe(
      first(),
      //delay(15000),
      tap(alunos => console.log(alunos))
    );
  }

  save(aluno: Aluno){
    console.log(aluno);
    return this.httpClient.post<Aluno>(this.API,aluno).pipe(first());
  }
}
