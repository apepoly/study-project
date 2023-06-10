package com.example.studyprojectbackend.controller;

import com.example.studyprojectbackend.entity.RestBean;
import com.example.studyprojectbackend.entity.auth.Account;
import com.example.studyprojectbackend.entity.user.AccountUser;
import com.example.studyprojectbackend.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserMapper userMapper;
    @GetMapping("/me")
    public RestBean<AccountUser> me(@SessionAttribute("account") AccountUser user) {
        return RestBean.success(user);
    }
    @GetMapping("/findAll")
    public RestBean<List<Account>> findAll() {
        return RestBean.success(userMapper.findAll());
    }
}
