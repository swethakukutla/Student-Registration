import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeDetailsResponse } from '../models/collegedetails.interface';
import { CollegeregistrationserviceService } from '../service/collegeregistrationservice.service';

@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.scss']
})
export class CollegeRegistrationComponent implements OnInit {
  collegeDetails: CollegeDetailsResponse;

  constructor(private collegeRegistartionService: CollegeregistrationserviceService,
              private router: Router) { }

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
  goToRegistrationForm(): void {
    alert("hii")
    this.router.navigateByUrl('/register');
  }
}
