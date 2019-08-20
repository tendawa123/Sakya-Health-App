import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri = 'http://localhost:4000/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // Create
  createEmployee(data, extensionUrl): Observable<any> {
    const url = `${this.baseUri}${extensionUrl}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getEmployees(extensionUrl) {
    return this.http.get(`${this.baseUri}${extensionUrl}`);
  }
  // Get employee
  getEmployee(id, extensionUrl): Observable<any> {
    const url = `${this.baseUri}${extensionUrl}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateEmployee(id, data, extensionUrl): Observable<any> {
    let url = `${this.baseUri}${extensionUrl}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteEmployee(id, extensionUrl): Observable<any> {
    let url = `${this.baseUri}${extensionUrl}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
