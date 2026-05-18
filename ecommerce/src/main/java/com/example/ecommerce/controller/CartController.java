
package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Cart;
import com.example.ecommerce.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@CrossOrigin
public class CartController {

    private final CartService cartService;

    @PostMapping
    public Cart addToCart(
            @RequestBody Cart cart,
            Authentication authentication
    ) {

        cart.setUserEmail(
                authentication.getName()
        );

        return cartService.addToCart(cart);
    }

    @GetMapping
    public List<Cart> getCart(
            Authentication authentication
    ) {

        return cartService.getUserCart(
                authentication.getName()
        );
    }
}
