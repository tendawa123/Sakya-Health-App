import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './disease-create.component.html',
  styleUrls: ['./disease-create.component.css']
})

export class DiseaseCreateComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  private extendUrl = 'diseases';

  // @ts-ignore
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() { }
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      symptoms: ['', [Validators.required]],
      causes: ['', [Validators.required]],
      preventions: ['', [Validators.required]]
    })
  }
  // Choose designation with select dropdown
  updateProfile(e){
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value, this.extendUrl).subscribe(
        (res) => {
          console.log('Disease successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/disease-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}
