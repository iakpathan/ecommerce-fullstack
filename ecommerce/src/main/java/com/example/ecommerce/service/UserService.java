package com.example.ecommerce.service;

import com.example.ecommerce.dto.LoginRequest;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.jwt.JwtService;
import com.example.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public User register(User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

       user.setRole("CUSTOMER");
      // user.setRole("ADMIN");
        return userRepository.save(user);
    }
public String login(LoginRequest request) {

    User user = userRepository
            .findByEmail(request.getEmail())
            .orElseThrow(() ->
                    new RuntimeException("User not found")
            );

    boolean passwordMatches =
            passwordEncoder.matches(
                    request.getPassword(),
                    user.getPassword()
            );

    if (!passwordMatches) {
        throw new RuntimeException(
                "Invalid password"
        );
    }

    return jwtService.generateToken(
            user.getEmail(),
            user.getRole()
    );
}


}