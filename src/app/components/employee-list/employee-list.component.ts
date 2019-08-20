import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  Employee: any = [];
  private extendUrl = '/users';
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
