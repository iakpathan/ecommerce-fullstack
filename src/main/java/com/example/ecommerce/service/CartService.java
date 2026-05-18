
package com.example.ecommerce.service;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    public Cart addToCart(Cart cart) {

        return cartRepository.save(cart);
    }

    public List<Cart> getUserCart(
            String userEmail
    ) {

        return cartRepository.findByUserEmail(
                userEmail
        );
    }
}
