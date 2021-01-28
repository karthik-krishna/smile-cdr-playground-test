import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: any ) {
    const group: any = {};
    questions.forEach(question => {
      if(question.type !=='group') {
        group[question.linkId] = question.type=='date' ? new FormControl('', [Validators.required])
                                              : new FormControl('',Validators.required);
      } else {
        question.item.forEach(question => {
          group[question.linkId] = question.type=='date' ? new FormControl('', Validators.required)
                                              : new FormControl('', Validators.required);
        });
      }
    });
  return new FormGroup(group);
  }
}