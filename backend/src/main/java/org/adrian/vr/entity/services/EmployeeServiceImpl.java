package org.adrian.vr.entity.services;

import java.util.List;

import org.adrian.vr.entity.dao.IEmployeeDao;
import org.adrian.vr.entity.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired
	private IEmployeeDao employeeDao;

	@Override
	public Employee get(long id_employee) {
		return employeeDao.findById(id_employee).get();
	}

	@Override
	public List<Employee> getAll() {
		return (List<Employee>)employeeDao.findAll();
	}

}
