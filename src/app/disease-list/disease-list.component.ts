import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})

export class DiseaseListComponent implements OnInit {

  Employee: any = [];
  private extendUrl = 'diseases';
  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiService.getEmployees(this.extendUrl).subscribe((data) => {
      this.Employee = data;
    })
  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee._id, this.extendUrl).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )
    }
  }
}
