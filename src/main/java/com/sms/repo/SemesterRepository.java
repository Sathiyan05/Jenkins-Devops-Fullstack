package com.sms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.model.Semester;

public interface SemesterRepository extends JpaRepository<Semester, Long> {

}
