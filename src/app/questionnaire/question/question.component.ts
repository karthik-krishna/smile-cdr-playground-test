import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IItem } from 'src/app/Interface/IItem';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: IItem;
  @Input() form: FormGroup;
  now: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    
  }

  maxDate(currentDate: Date) {
    this.now = currentDate;
    const dd = this.now.getDate();
    const mm = this.now.getMonth()+1; //January is 0!
    const yyyy = this.now.getFullYear();
    let date:string;
    let month:string;
      if(dd<10){
            date ='0'+dd
        } else {
          date = dd.toString();
        }
        if(mm<10){
          month='0'+mm
        } else {
          month = mm.toString();
        }

    return yyyy+'-'+month+'-'+date;
  }

}
