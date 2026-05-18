package com.example.ecommerce.service;

import com.example.ecommerce.entity.Product;
import com.example.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final CacheService cacheService;

    public Product create(Product product) {

        Product saved =
                productRepository.save(product);

        cacheService.put(
                saved.getId(),
                saved
        );

        return saved;
    }

    public List<Product> getAll() {

        return productRepository.findAll();
    }

    public Product getById(Long id) {

        if (cacheService.contains(id)) {

            return (Product)
                    cacheService.get(id);
        }

        Product product =
                productRepository.findById(id)
                        .orElse(null);

        if (product != null) {

            cacheService.put(id, product);
        }

        return product;
    }
}
