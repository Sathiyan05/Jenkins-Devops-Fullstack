package com.sms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
