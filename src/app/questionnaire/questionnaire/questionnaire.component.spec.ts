import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireComponent } from './questionnaire.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addItem should work ', () => {
    let response = {
      "id":1611814166914,
      "status":"completed",
      "authored":"2021-01-28T06:09:26.914Z",
      "author":"Patient",
      "subject":"Patient",
      "source":"Patient",
      "item":[
        {
          "linkId":"1",
          "text":"Do you have allergies?",
          "type":"boolean","answer":"false"
        },
        {
          "linkId":"2",
          "text":"General questions",
          "type":"group",
          "item":[
            {
              "linkId":"2.1",
              "text":"What is your gender?",
              "type":"string",
              "answer":"male"
            },
            {
              "linkId":"2.2",
              "text":"What is your date of birth?",
              "type":"date",
              "answer":"2021-01-15"
            },
            {
              "linkId":"2.3",
              "text":"What is your country of birth?",
              "type":"string",
              "answer":"canada"
            },
            {
              "linkId":"2.4",
              "text":"What is your marital status?",
              "type":"string","answer":"married"
            }
          ]
        },
        {
          "linkId":"3",
          "text":"Intoxications",
          "type":"group",
          "item":[
            {
              "linkId":"3.1",
              "text":"Do you smoke?",
              "type":"boolean",
              "answer":"true"
            },
            {
              "linkId":"3.2",
              "text":"Do you drink alchohol?",
              "type":"boolean",
              "answer":"true"
            }
          ]
        }
      ]
    }
    const responseArrLength = component.responseArr.length;
    const expectedY = 300;
    const actualY = window.pageYOffset;
    jasmine.clock().install();
    component.addItem(response);
    expect(component.responseArr.length).toBe(responseArrLength+1);
    jasmine.clock().tick(301);
    jasmine.clock().uninstall();
  });

  it('should get questionnaire from api on init', () => {
    component.ngOnInit();
    expect(component.questions$).toBeDefined();
  });
  

});
