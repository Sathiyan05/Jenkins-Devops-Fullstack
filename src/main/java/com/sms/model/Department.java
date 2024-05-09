package com.sms.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long department_id;

	private String department_name;
	private String hod;

	@OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
	private List<Student> students;

	@OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
	private List<Semester> semesters;

	@OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
	private List<Subject> subjects;

	public Department() {
		super();
	}

	public Department(long department_id, String department_name, String hod) {
		super();
		this.department_id = department_id;
		this.department_name = department_name;
		this.hod = hod;
	}

	public long getDepartment_id() {
		return department_id;
	}

	public void setDepartment_id(long department_id) {
		this.department_id = department_id;
	}

	public String getDepartment_name() {
		return department_name;
	}

	public void setDepartment_name(String department_name) {
		this.department_name = department_name;
	}

	public String getHod() {
		return hod;
	}

	public void setHod(String hod) {
		this.hod = hod;
	}

}
