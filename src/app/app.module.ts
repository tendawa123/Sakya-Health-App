import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiseaseCreateComponent } from './disease-create/disease-create.component';
import { DiseaseEditComponent } from './disease-edit/disease-edit.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    HomeComponent,
    DashboardComponent,
    DiseaseCreateComponent,
    DiseaseEditComponent,
    DiseaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
