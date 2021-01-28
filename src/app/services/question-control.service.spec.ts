import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './question-control.service';

describe('QuestionControlService', () => {
  let service: QuestionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have toFormGroup function', () => {
    const service: QuestionControlService = TestBed.get(QuestionControlService);
    const question = [
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
    expect(service.toFormGroup(question)).toBeTruthy();
   });
});
