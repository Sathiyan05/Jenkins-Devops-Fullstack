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


import com.sms.model.Student;
import com.sms.repo.StudentRepository;

@RestController
@RequestMapping("api/student")
@CrossOrigin("*")
public class StudentController {
	
	private StudentRepository studentRepository;
	
	public StudentController(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	//Create New Student
	@PostMapping("CreateStudent")
	public ResponseEntity<?> createStudent(@RequestBody Student student) {
		try {
			studentRepository.save(student);
	        return new ResponseEntity<>("Object Inserted", HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Object Insertion Failed", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
    }
	
	//Get all Department Details
	@GetMapping("GetAllStudent")
	public ResponseEntity<List<Student>> getAllStudents(){
		return new ResponseEntity<>(studentRepository.findAll(), HttpStatus.OK);
	}
	
	//Get Student By id
	@GetMapping("FindStudent/{studentId}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long studentId){
		return new ResponseEntity<>(studentRepository.findById(studentId).orElseThrow(()-> new RuntimeException("Student Not Found")), HttpStatus.OK);
	}
	
	//Update Student
	@PutMapping("UpdateStudent/{studentId}")
	public ResponseEntity<Student> updateStudent(@PathVariable long studentId, @RequestBody Student student){
		Student existingStudent = studentRepository.findById(studentId).orElseThrow(()-> new RuntimeException("Student Not Found"));
		existingStudent.setName(student.getName());
		existingStudent.setContact(student.getContact());
		existingStudent.setDepartment(student.getDepartment());
		existingStudent.setEmail(student.getEmail());
		existingStudent.setLocation(student.getLocation());
		 return new ResponseEntity<>(studentRepository.save(existingStudent), HttpStatus.OK);
	}
	
	//Delete Student
	@DeleteMapping("DeleteStudent/{studentId}")
	public ResponseEntity<Void> deleteStudent(@PathVariable Long studentId){
		studentRepository.deleteById(studentId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
