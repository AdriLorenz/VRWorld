package org.adrian.vr.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_employee")
	private long id_employee;
	
	@Column(name = "name_employee")
	private String name_employee;
	
	@Column(name = "job_description")
	private String job_description;
	
	@Column(name = "image_employee")
	private String image_employee;

	public Employee(String name_employee, String job_description, String image_employee) {
		super();
		this.name_employee = name_employee;
		this.job_description = job_description;
		this.image_employee = image_employee;
	}

	public Employee() {
		super();
	}

	public long getId_employee() {
		return id_employee;
	}

	public void setId_employee(long id_employee) {
		this.id_employee = id_employee;
	}

	public String getName_employee() {
		return name_employee;
	}

	public void setName_employee(String name_employee) {
		this.name_employee = name_employee;
	}

	public String getJob_description() {
		return job_description;
	}

	public void setJob_description(String job_description) {
		this.job_description = job_description;
	}

	public String getImage_employee() {
		return image_employee;
	}

	public void setImage_employee(String image_employee) {
		this.image_employee = image_employee;
	}
}