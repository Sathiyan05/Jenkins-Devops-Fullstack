package com.sms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sms.model.Mark;

import jakarta.transaction.Transactional;

public interface MarkRepository extends JpaRepository<Mark, Long> {
	
	@Query("SELECT m FROM Mark m WHERE m.student.id = :studentId")
    List<Mark> findByStudentId(Long studentId);

}
