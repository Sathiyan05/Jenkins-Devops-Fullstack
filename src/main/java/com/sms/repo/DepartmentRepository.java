package com.sms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
