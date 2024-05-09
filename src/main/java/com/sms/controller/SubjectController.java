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

import com.sms.model.Subject;
import com.sms.repo.SubjectRepository;

@RestController
@RequestMapping("api/subject")
@CrossOrigin("*")
public class SubjectController {

	private SubjectRepository subjectRepository;

	public SubjectController(SubjectRepository subjectRepository) {
		super();
		this.subjectRepository = subjectRepository;
	}

	// Create New Subject
	@PostMapping("CreateSubject")
	public ResponseEntity<Subject> createSubject(@RequestBody Subject subject) {
		return new ResponseEntity<>(subjectRepository.save(subject), HttpStatus.CREATED);
	}

	// Get all subjects
	@GetMapping("GetAllSubjects")
	public ResponseEntity<List<Subject>> getAllSubject() {
		return new ResponseEntity<>(subjectRepository.findAll(), HttpStatus.OK);
	}

	// Get Subject By id
	@GetMapping("FindSubject/{subjectId}")
	public ResponseEntity<Subject> getSubjectById(@PathVariable Long subjectId) {
		return new ResponseEntity<>(
				subjectRepository.findById(subjectId).orElseThrow(() -> new RuntimeException("Subject Not Found")),
				HttpStatus.OK);
	}

	// Update Subject
	@PutMapping("UpdateSubject/{subjectId}")
	public ResponseEntity<Subject> updateSubject(@PathVariable long subjectId, @RequestBody Subject subject) {
		Subject existingSubject = subjectRepository.findById(subjectId)
				.orElseThrow(() -> new RuntimeException("Subject Not Found"));
		existingSubject.setSubject_name(subject.getSubject_name());
		existingSubject.setSemester(subject.getSemester());
		existingSubject.setDepartment(subject.getDepartment());
		return new ResponseEntity<>(subjectRepository.save(existingSubject), HttpStatus.OK);
	}

	// Delete Subject
	@DeleteMapping("DeleteSubject/{subjectId}")
	public ResponseEntity<Void> deleteSubject(@PathVariable Long subjectId) {
		subjectRepository.deleteById(subjectId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
