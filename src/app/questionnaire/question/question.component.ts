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
  maxDate: string;

  constructor() { }

  ngOnInit(): void {
    this.now = new Date();
    this.maxDate = this.now.getFullYear()+'-'+this.now.getMonth()+1+'-'+this.now.getDate();
  }

}
