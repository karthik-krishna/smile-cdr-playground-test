import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { IResponse } from 'src/app/Interface/IResponse';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/Interface/IQuestionnaire';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions$: Observable<Object>;
  responseArr: Array<IResponse>=[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() :void{
    this.questions$ = this.apiService.getQuestions();
  }

  addItem(newItem) {
    this.responseArr.push(newItem);
    this.responseArr.reverse();
    setTimeout(() => {
      window.scroll({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
    }, 300);
    
  }

}
