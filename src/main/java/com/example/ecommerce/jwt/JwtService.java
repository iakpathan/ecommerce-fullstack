
package com.example.ecommerce.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey12";

    private final SecretKey key =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    // Generate JWT with role
    public String generateToken(
            String email,
            String role
    ) {

        return Jwts.builder()
                .subject(email)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )
                .signWith(key)
                .compact();
    }

    public Claims extractClaims(String token) {

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String extractEmail(String token) {

        return extractClaims(token)
                .getSubject();
    }

    public String extractRole(String token) {

        return extractClaims(token)
                .get("role", String.class);
    }

    public boolean isTokenValid(
            String token,
            String email
    ) {

        String extractedEmail =
                extractEmail(token);

        return extractedEmail.equals(email);
    }
}