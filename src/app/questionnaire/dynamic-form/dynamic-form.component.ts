import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IItem } from 'src/app/Interface/IItem';
import { IQuestion } from 'src/app/Interface/IQuestionnaire';
import { IResponse } from 'src/app/Interface/IResponse';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Output() addResponse = new EventEmitter<IResponse>();
  @Input() questions: IQuestion | IItem;
  form: FormGroup;
  errMessage: string;
  items: any;
  

  constructor(private qcs: QuestionControlService) { }

  ngOnChanges() {
    if(this.questions) {
      this.form = this.qcs.toFormGroup(this.questions.item);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errMessage = null;
    const now = Number(new Date());
    if(Number(new Date(this.form.controls[2.2].value))<now) {
      this.items = JSON.parse(JSON.stringify(this.questions));
      this.items.item.forEach(element => {
        if(element.type!=='group') {
          for (let answerid in this.form.getRawValue()) {
            if(element.linkId==answerid){
              element.answer= this.form.getRawValue()[answerid];
            }
          }
        }else {
          element.item.forEach(innerElem => {
            for (let answerid in this.form.getRawValue()) {
              if(innerElem.linkId==answerid){
                innerElem.answer = this.form.getRawValue()[answerid];
              }
            }
          })
        }
      });

      let response = {
        id:now,
        status:'active',
        authored:new Date(),
        author:'Patient',
        subject:'Patient',
        source:'Patient',
        item:[].concat([...this.items.item])
      }
      this.addResponse.emit(response);
      this.form.reset();
    }else {
      this.errMessage = `Date should be lesser than or equal to today's date`;
    }
  }

}
