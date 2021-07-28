import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionComponent } from './question/question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ResponseComponent } from './response/response.component';



@NgModule({
  declarations: [QuestionnaireComponent, QuestionComponent,DynamicFormComponent, ResponseComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuestionnaireModule { }
