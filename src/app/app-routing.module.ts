import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DiseaseCreateComponent} from './disease-create/disease-create.component';
import {DiseaseEditComponent} from './disease-edit/disease-edit.component';
import {DiseaseListComponent} from './disease-list/disease-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: EmployeeCreateComponent },
  { path: 'edit-user/:id', component: EmployeeEditComponent },
  { path: 'user-list', component: EmployeeListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'disease-create', component: DiseaseCreateComponent },
  { path: 'disease-edit/:id', component: DiseaseEditComponent },
  { path: 'disease-list', component: DiseaseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
