package com.example.studyprojectbackend;

import com.example.studyprojectbackend.mapper.UserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class StudyProjectBackendApplicationTests {
    @Autowired
    UserMapper userMapper;

    @Test
    void contextLoads() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        System.out.println(encoder.encode("123456"));
    }
    @Test
    void test() {
        userMapper.findAll();
    }
}
