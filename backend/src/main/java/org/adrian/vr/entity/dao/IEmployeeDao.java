package org.adrian.vr.entity.dao;

import org.adrian.vr.entity.models.Employee;
import org.springframework.data.repository.CrudRepository;

public interface IEmployeeDao extends CrudRepository<Employee, Long> {

}
