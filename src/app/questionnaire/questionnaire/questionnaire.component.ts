import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions$: any;
  responseArr: Array<Object>=[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() :void{
    this.questions$ = this.apiService.getQuestions();
  }

  addItem(newItem: any) {
    this.responseArr.push(newItem);
    console.log(this.responseArr)
  }

}
