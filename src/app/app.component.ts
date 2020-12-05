import { Component } from '@angular/core';
// import * as Mock from 'src/assets/mock/cityMaster.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-college-portal';
  cityList: any;
  constructor() {
   // this.cityList = Mock.svcGetCityListData['cityDetialList'];
    // console.log(this.cityList)
  }
}
