package com.rv02.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(
                        UUID.randomUUID(),
                        "Jamila",
                        "Bond",
                        "jamila@gomail.com",
                        Gender.FEMALE),
                new Student(
                        UUID.randomUUID(),
                        "Alex",
                        "Hales",
                        "alex@gomail.com",
                        Gender.MALE)
        );
    }
}
