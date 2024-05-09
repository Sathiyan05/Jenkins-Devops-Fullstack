package com.sms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
