package com.example.ecommerce.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CacheService {

    private final Map<Long, Object> cache =
            new HashMap<>();

    public void put(
            Long key,
            Object value
    ) {

        cache.put(key, value);
    }

    public Object get(Long key) {

        return cache.get(key);
    }

    public boolean contains(
            Long key
    ) {

        return cache.containsKey(key);
    }
}