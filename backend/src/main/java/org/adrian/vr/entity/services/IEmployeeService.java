package org.adrian.vr.entity.services;

import java.util.List;

import org.adrian.vr.entity.models.Employee;

public interface IEmployeeService {
	
	public Employee get(long id_employee);
	public List <Employee> getAll();

}
