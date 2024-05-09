package com.sms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.model.Mark;
import com.sms.repo.MarkRepository;

@RestController
@RequestMapping("api/mark")
@CrossOrigin("*")
public class MarkController {

	private MarkRepository markRepository;

	public MarkController(MarkRepository markRepository) {
		super();
		this.markRepository = markRepository;
	}

	// Create New Mark
	@PostMapping("CreateMark")
	public ResponseEntity<?> createMark(@RequestBody Mark mark) {
		try {
			markRepository.save(mark);
			return new ResponseEntity<>("Mark Saved to the Student", HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Mark Not saved", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	// Get all Marks
	@GetMapping("GetAllMarks")
	public ResponseEntity<List<Mark>> getAllMarks() {
		return new ResponseEntity<>(markRepository.findAll(), HttpStatus.OK);
	}

	// Get Marks By id
	@GetMapping("FindMark/{studentId}")
	public List<Mark> getMarksByStudentId(@PathVariable Long studentId) {
        return markRepository.findByStudentId(studentId);
    }

	// Update Mark
	@PutMapping("UpdateMark/{markId}")
	public ResponseEntity<Mark> updateMark(@PathVariable long markId, @RequestBody Mark mark) {
		Mark existingMark = markRepository.findById(markId)
				.orElseThrow(() -> new RuntimeException("Semester Not Present in that Id"));
		existingMark.setMark(mark.getMark());
		existingMark.setSubject(mark.getSubject());
		existingMark.setStudent(mark.getStudent());
		return new ResponseEntity<>(markRepository.save(existingMark), HttpStatus.OK);
	}

}
