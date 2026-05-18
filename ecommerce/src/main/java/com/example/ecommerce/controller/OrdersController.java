package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.service.OrdersService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@CrossOrigin
public class OrdersController {

    private final OrdersService ordersService;

    @PostMapping
    public Orders placeOrder(
            @RequestBody Orders order,
            Authentication authentication
    ) {

        order.setUserEmail(
                authentication.getName()
        );

        return ordersService.placeOrder(order);
    }

    @GetMapping
    public List<Orders> getOrders(
            Authentication authentication
    ) {

        return ordersService.getUserOrders(
                authentication.getName()
        );
    }
}
