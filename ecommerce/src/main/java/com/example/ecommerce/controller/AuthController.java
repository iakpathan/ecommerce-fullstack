package com.example.ecommerce.controller;

import com.example.ecommerce.dto.LoginRequest;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.example.ecommerce.dto.RegisterRequest;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final UserService userService;

   
@PostMapping("/register")
public User register(
        @Valid @RequestBody RegisterRequest request
) {

    User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(request.getPassword())
            .build();

    return userService.register(user);
}



    @PostMapping("/login")
    public String login(
            @RequestBody LoginRequest request
    ) {

        return userService.login(request);
    }
}