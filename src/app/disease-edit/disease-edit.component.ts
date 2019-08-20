import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-disease-edit',
  templateUrl: './disease-edit.component.html',
  styleUrls: ['./disease-edit.component.css']
})

export class DiseaseEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  private extendUrl = 'diseases';
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      symptoms: ['', [Validators.required]],
      causes: ['', [Validators.required]],
      preventions: ['', [Validators.required]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id, this.extendUrl).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        symptoms: data['symptoms'],
        causes: data['causes'],
        preventions: data['preventions'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      symptoms: ['', [Validators.required]],
      causes: ['', [Validators.required]],
      preventions: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value, this.extendUrl)
          .subscribe(res => {
            this.router.navigateByUrl('/disease-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
