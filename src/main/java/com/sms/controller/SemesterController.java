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

import com.sms.model.Semester;
import com.sms.repo.SemesterRepository;

@RestController
@RequestMapping("api/semester")
@CrossOrigin("*")
public class SemesterController {

	private SemesterRepository semesterRepository;

	public SemesterController(SemesterRepository semesterRepository) {
		super();
		this.semesterRepository = semesterRepository;
	}

	// Create New Semester
	@PostMapping("CreateSemester")
	public ResponseEntity<Semester> createSemester(@RequestBody Semester semester) {
		return new ResponseEntity<>(semesterRepository.save(semester), HttpStatus.CREATED);
	}

	// Get all Semester Details
	@GetMapping("GetAllSemesters")
	public ResponseEntity<List<Semester>> getAllSemesters() {
		return new ResponseEntity<>(semesterRepository.findAll(), HttpStatus.OK);
	}

	// Get Semester By id
	@GetMapping("FindSemester/{semesterId}")
	public ResponseEntity<Semester> getSemesterById(@PathVariable Long semesterId) {
		return new ResponseEntity<>(semesterRepository.findById(semesterId)
				.orElseThrow(() -> new RuntimeException("Semester Not Present in that Id")), HttpStatus.OK);
	}

	// Update Semester
	@PutMapping("UpdateSemester/{semesterId}")
	public ResponseEntity<Semester> updateSemester(@PathVariable long semesterId, @RequestBody Semester semester) {
		Semester existingSemester = semesterRepository.findById(semesterId)
				.orElseThrow(() -> new RuntimeException("Semester Not Present in that Id"));
		existingSemester.setName(semester.getName());
		existingSemester.setDepartment(semester.getDepartment());
		return new ResponseEntity<>(semesterRepository.save(existingSemester), HttpStatus.OK);
	}

	// Delete Semester
	@DeleteMapping("DeleteSemester/{semesterId}")
	public ResponseEntity<Void> deleteSemester(@PathVariable Long semesterId) {
		semesterRepository.deleteById(semesterId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
