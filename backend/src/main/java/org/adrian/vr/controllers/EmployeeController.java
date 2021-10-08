package org.adrian.vr.controllers;

import java.util.List;

import org.adrian.vr.entity.models.Employee;
import org.adrian.vr.entity.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class EmployeeController {
	
	@Autowired
	IEmployeeService employeeService;
	
	@GetMapping("/employees")
	public List<Employee> getAllProducts() {
		try {
			return employeeService.getAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return employeeService.getAll();
	}
	
	@GetMapping("/employees/{id_employee}")
	public Employee getOne(@PathVariable(value = "id_employee") long id_employee) {
		try {
			return employeeService.get(id_employee);
		} catch (Exception e ) {
			System.out.println(e.getMessage());
		}
		return employeeService.get(id_employee);
	}

}
