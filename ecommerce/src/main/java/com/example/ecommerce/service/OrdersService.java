package com.example.ecommerce.service;

import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.entity.Product;
import com.example.ecommerce.repository.OrdersRepository;
import com.example.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;
    private final ProductRepository productRepository;

    public Orders placeOrder(
            Orders order
    ) {

        Product product =
                productRepository
                        .findById(order.getProductId())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Product not found"
                                )
                        );

        double total =
                product.getPrice()
                        * order.getQuantity();

        order.setTotalPrice(total);

        order.setStatus("PLACED");
        
       order.setPaymentStatus("SUCCESS");



        return ordersRepository.save(order);
    }

    public List<Orders> getUserOrders(
            String userEmail
    ) {

        return ordersRepository.findByUserEmail(
                userEmail
        );
    }
}
