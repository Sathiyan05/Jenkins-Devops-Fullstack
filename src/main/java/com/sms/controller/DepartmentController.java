package com.sms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.model.Department;
import com.sms.repo.DepartmentRepository;


@RestController
@RequestMapping("api/department")
@CrossOrigin("*")
public class DepartmentController {

	private DepartmentRepository departmentRepository;

	public DepartmentController(DepartmentRepository departmentRepository) {
		super();
		this.departmentRepository = departmentRepository;
	}
	
	//Create New Department
	@PostMapping("CreateDepartment")
	public ResponseEntity<Department> createDepartment(@RequestBody Department department) {
        return new ResponseEntity<>(departmentRepository.save(department), HttpStatus.CREATED);
    }
	
	//Get all Department Details
	@GetMapping("GetAllDepartments")
	public ResponseEntity<List<Department>> getAllDepartments(){
		return new ResponseEntity<>(departmentRepository.findAll(), HttpStatus.OK);
	}
	
	//Get Department By id
	@GetMapping("FindDepartment/{departmentId}")
	public ResponseEntity<Department> getDepartmentById(@PathVariable Long departmentId){
		return new ResponseEntity<>(departmentRepository.findById(departmentId).orElseThrow(()-> new RuntimeException("Department Not Present in that Id")), HttpStatus.OK);
	}
	
	//Update Department
	@PutMapping("UpdateDepartment/{department_id}")
	public ResponseEntity<Department> updateDepartment(@PathVariable long department_id, @RequestBody Department department){
		Department existingDepartment = departmentRepository.findById(department_id).orElseThrow(()-> new RuntimeException("Department Not Present in that Id"));
		existingDepartment.setDepartment_name(department.getDepartment_name());
		existingDepartment.setHod(department.getHod());
		 return new ResponseEntity<>(departmentRepository.save(existingDepartment), HttpStatus.OK);
	}
	
	//Delete Department
	@DeleteMapping("DeleteDepartment/{department_id}")
	public ResponseEntity<Void> deleteDepartment(@PathVariable Long department_id){
		departmentRepository.deleteById(department_id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	
}
