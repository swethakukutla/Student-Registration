import { Component, OnInit } from '@angular/core';
import { CollegeDetailsResponse } from '../models/collegedetails.interface';
import { CollegeregistrationserviceService } from '../service/collegeregistrationservice.service';

@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.scss']
})
export class CollegeRegistrationComponent implements OnInit {

  constructor(private collegeRegistartionService: CollegeregistrationserviceService) { }
  collegeDetails: CollegeDetailsResponse;

  ngOnInit(): void {
    this.collegeRegistartionService.getCollegeDetails().subscribe((data) => {
      this.collegeDetails = data;
    });
  }

  // collegeSelected(id): any {
  //   this.collegeRegistartionService.getCollegeDetails().subscribe((data) => {
  //     this.collegeDetails = data;
  //   });
  // }
}
