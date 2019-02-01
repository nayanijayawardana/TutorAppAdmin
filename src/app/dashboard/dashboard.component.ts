import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/services/admin-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    numberOfStudents;
    numberOfTutors;
    numberOfMassages;

  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
      {data: [70, 39, 50, 37, 48, 25, 65, 30, 20, 43, 16, 0], label: 'Tutors'},
      {data: [80, 58, 40, 69, 86, 67, 90, 22, 7, 17, 18, 9], label: 'Student'}
  ];

  public chartLabels:Array<any> = ['colombo', 'gampaha', 'kegalle', 'rathnapura', 'kurunegala', 'kandy', 'matara', 'galle', 'hambantota', 'matale', 'anuradapura', 'polonnarywa'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(151, 150, 218, 0.466)',
          borderColor: 'rgba(109, 108, 204, 0.466)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = {
      responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



  constructor(
      private adminService: AdminServiceService
  ) { }

  ngOnInit() {
    this.adminService.adminData()
        .subscribe(res =>{
            let data = res.json();
            this.numberOfStudents = data.studentCount;
            this.numberOfTutors = data.tutorCount;
            this.numberOfMassages = data.msgCount;
        })
  }

}



  


