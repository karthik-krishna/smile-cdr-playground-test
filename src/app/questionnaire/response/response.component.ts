import { Component, Input, OnInit } from '@angular/core';
import { IResponse } from 'src/app/Interface/IResponse';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  @Input() response:IResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
