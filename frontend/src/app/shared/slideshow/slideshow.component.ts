import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from '../services/employee.service';
import { LoadScriptsService } from '../services/load-scripts.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  public employees: Array<Employee> = [];

  constructor(private name: LoadScriptsService,
    private employeeService: EmployeeService, route: ActivatedRoute) {

    route.params.subscribe((x) => {
      this.loadInfo()
      
    })
  }

  ngOnInit(): void {
    this.name.Load(["slider"]);
    
  }

  loadInfo() {
    this.employeeService.getEmployees().subscribe((b: Array<Employee>) => {
      this.employees = b;
    })

  }
}
