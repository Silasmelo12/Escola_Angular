import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AlunosService } from './../services/alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  form: FormGroup;
  booleanValue = new FormControl(true);
  options = [
    {value: true, viewValue: 'True'},
    {value: false, viewValue: 'False'},
  ];

  constructor(private formBuilder: FormBuilder,
    private service: AlunosService){
    this.form = this.formBuilder.group({
      //numeroIncricao: number;
      nome: [null],
      contato: [null],
      data_nasicmento: [null],
      endereco: [null],
      //senha:String ;
      bolsista: new FormControl(true),
      genero:[null],
      estadoCivil:[null],
      raca:[null],
      RG:[null],
    });

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(){
    //console.log(this.booleanValue.value);
    //this.form.setValue({bolsista: this.booleanValue.value});
    this.service.save(this.form.value).subscribe(result => console.log(result));
  }

  onCancel(){

  }

}
