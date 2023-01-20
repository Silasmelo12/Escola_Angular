import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      //numeroIncricao: number;
      nome: [null],
      contato: [null],
      data_nasicmento: [null],
      endereco: [null],
      //senha:String ;
      bolsista:[null],
      genero:[null],
      estadoCivil:[null],
      raca:[null],
      rg:[null],
    });

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
