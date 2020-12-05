import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollegeDetailsResponse } from '../models/collegedetails.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeregistrationserviceService {

  constructor(private http: HttpClient) { }

getCollegeDetails(): Observable<CollegeDetailsResponse>{
    return this.http.get<CollegeDetailsResponse>('../../assets/mock/collegeDetails.json');
  }
}
