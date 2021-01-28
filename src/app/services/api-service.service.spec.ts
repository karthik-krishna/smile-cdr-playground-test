import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api-service.service';


describe('ApiService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [ApiService]
      }));

       it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
       });

       it('should have getPatientData function', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service.getPatients()).toBeTruthy();
       });

       it('should have getQuestionsData function', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service.getQuestions()).toBeTruthy();
       });

    });