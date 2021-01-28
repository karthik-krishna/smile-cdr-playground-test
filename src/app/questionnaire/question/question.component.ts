import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Input() form: FormGroup;
  now: Date;

  constructor() { }

  ngOnInit(): void {
    
  }

  maxDate() {
    this.now = new Date();
    const dd = this.now.getDate();
    const mm = this.now.getMonth()+1; //January is 0!
    const yyyy = this.now.getFullYear();
    let date:string;
    let month:string;
      if(dd<10){
            date='0'+dd
        } 
        if(mm<10){
          month='0'+mm
        } 

    return yyyy+'-'+month+'-'+date;
  }

}
