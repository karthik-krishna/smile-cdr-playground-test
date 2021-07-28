import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create form controls on ng changes', () => {
    component.ngOnChanges();
    if(component.questions) {
      expect(component.form).toBeDefined();
    } else {
      expect(component.form).toBeUndefined();
    }
  });

  const questions = {
    date: "2010",
    id: "f201",
    resourceType: "Questionnaire",
    status: "active",
    subjectType: ["Patient"],
    url: "http://hl7.org/fhir/Questionnaire/f201",
    item: [
      {
        "linkId": "1",
        "text": "Do you have allergies?",
        "type": "boolean"
      },
      {
        "linkId": "2",
        "text": "General questions",
        "type": "group",
        "item": [
          {
            "linkId": "2.1",
            "text": "What is your gender?",
            "type": "string"
          },
          {
            "linkId": "2.2",
            "text": "What is your date of birth?",
            "type": "date"
          },
          {
            "linkId": "2.3",
            "text": "What is your country of birth?",
            "type": "string"
          },
          {
            "linkId": "2.4",
            "text": "What is your marital status?",
            "type": "string"
          }
        ]
      },
      {
        "linkId": "3",
        "text": "Intoxications",
        "type": "group",
        "item": [
          {
            "linkId": "3.1",
            "text": "Do you smoke?",
            "type": "boolean"
          },
          {
            "linkId": "3.2",
            "text": "Do you drink alchohol?",
            "type": "boolean"
          }
        ]
      }
    ]
  }
  it('test function on submit', () => {
    component.questions = questions;
    component.ngOnChanges();
    component.form.setValue({"1":"true","2.1":"male","2.2":"2021-01-14","2.3":"canada","2.4":"unmarried","3.1":"true","3.2":"true"})
    component.onSubmit();
    expect(component.form.controls["1"].value).toBeNull();    
  });

  it('test function on submit if date is greater than current date', () => {
    component.questions = questions;
    component.ngOnChanges();
    component.form.setValue({"1":"true","2.1":"male","2.2":"2022-01-14","2.3":"canada","2.4":"unmarried","3.1":"true","3.2":"true"})
    component.onSubmit();
    expect(component.errMessage).toBe(`Date should be lesser than or equal to today's date`);    
  });

});
