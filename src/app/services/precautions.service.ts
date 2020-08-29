import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Precaution} from '../models/precaution.model';


@Injectable({
  providedIn: 'root'
})
export class PrecautionsService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const precautions: Precaution[] = [
      { id: 1, precaution: 'Clean your hands often. Use soap and water, or an alcohol-based hand rub.' },
      { id: 2, precaution: 'Maintain a safe distance from anyone who is coughing or sneezing.' },
      { id: 3, precaution: 'Don’t touch your eyes, nose or mouth.' },
      { id: 4, precaution: 'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.' },
      { id: 5, precaution: 'Stay home if you feel unwell.' },
      { id: 6, precaution: 'If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.' },
      { id: 7, precaution: 'Follow the directions of your local health authority.' }
    ];
    return {precautions};
  }



}
