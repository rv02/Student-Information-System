package com.rv02.app.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(UUID id) {
        return this.studentRepository.findById(id);
    }

    public Student addStudent(Student student) {
        return this.studentRepository.save(student);
    }
}
