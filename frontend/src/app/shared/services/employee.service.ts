import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = "http://localhost:8080/employees"

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.endpoint);
  }

  getEmployeeById(id_employee: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.endpoint + "/" + id_employee);
  }

}
