
package com.example.ecommerce.controller;

import com.example.ecommerce.entity.Product;
import com.example.ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService productService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Product create(
            @RequestBody Product product
    ) {

        return productService.create(product);
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Product> getAll() {

        return productService.getAll();
    }

    @GetMapping("/{id}")
    public Product getById(
            @PathVariable Long id
    ) {

        return productService.getById(id);
    }
}