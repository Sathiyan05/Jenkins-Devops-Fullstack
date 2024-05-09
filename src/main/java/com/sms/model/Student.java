package com.sms.model;

import jakarta.persistence.*;

@Entity
@Table
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long student_id;
	
	private String name;
	private String email;
	private String contact;
	private String location;
	
	@ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
	
	public Student() {
		super();
	}

	public Student(long student_id, String name, String email, String contact, String location, Department department) {
		super();
		this.student_id = student_id;
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.location = location;
		this.department = department;
	}

	public long getStudent_id() {
		return student_id;
	}

	public void setStudent_id(long student_id) {
		this.student_id = student_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}	
	
	
}
