import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Output() addResponse = new EventEmitter<any>();
  @Input() questions: any= {
    item:[]
  };
  form: FormGroup;
  

  constructor(private qcs: QuestionControlService) { }

  ngOnChanges() {
    if(this.questions) {
      this.form = this.qcs.toFormGroup(this.questions.item);
    }
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const item =[];
    this.questions.item.forEach(element => {
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
      id:Number(new Date()),
      status:'completed',
      authored:new Date(),
      author:'Patient',
      subject:'Patient',
      source:'Patient',
      item:[...this.questions.item]
    }
    this.addResponse.emit(response);
    this.form.reset();
  }

}
