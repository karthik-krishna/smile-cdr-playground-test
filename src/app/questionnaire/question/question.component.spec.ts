import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('max date exist', () => {
    const currentDate = new Date()
    expect(component.maxDate(currentDate)).toBeDefined();
  });

  it('get max date', () => {
    const currentDate = new Date()
    const maxdate = component.maxDate(currentDate);
    const day = new Date(maxdate).getDate();
    let mm:string;
    let dd:string;
    if ((new Date().getMonth()+1) < 10) {
      mm = '0'+(new Date().getMonth()+1);
    }else  {
      mm = (new Date().getMonth()+1).toString();
    }
    if ((new Date().getDate()) < 10) {
      dd = '0'+new Date().getDate();
    }else  {
      dd = (new Date().getDate()).toString();
    }
    const existingDate = new Date().getFullYear()+'-'+mm+'-'+dd;
    const expectedday = new Date(existingDate).getDate();
    expect(day).toBe(expectedday);
  });

  it('get max date in else condition', () => {
    const currentDate = new Date('2021-11-2')
    const maxdate = component.maxDate(currentDate);
    const day = new Date(maxdate).getDate();
    let mm:string;
    let dd:string;
    if ((new Date(currentDate).getMonth()+1) < 10) {
      mm = '0'+(new Date(currentDate).getMonth()+1);
    }else  {
      mm = (new Date(currentDate).getMonth()+1).toString();
    }
    if ((new Date(currentDate).getDate()) < 10) {
      dd = '0'+new Date(currentDate).getDate();
    }else  {
      dd = (new Date(currentDate).getDate()).toString();
    }
    const existingDate = new Date(currentDate).getFullYear()+'-'+mm+'-'+dd;
    const expectedday = new Date(existingDate).getDate();
    expect(day).toBe(expectedday);
  });

});
