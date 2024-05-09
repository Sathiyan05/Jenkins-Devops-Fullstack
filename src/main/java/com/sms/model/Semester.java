package com.sms.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Semester {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long semester_id;
	
	private String name;
	
	@ManyToOne
    @JoinColumn(name="department_id")
    private Department department;
	
	@OneToMany(mappedBy = "semester")
    private List<Subject> subjects;

	public long getSemester_id() {
		return semester_id;
	}

	public void setSemester_id(long semester_id) {
		this.semester_id = semester_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

}
