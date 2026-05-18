
# Ecommerce Backend System

Production-style Ecommerce Backend Application built using Spring Boot, PostgreSQL, Docker, Kubernetes, and GitHub Actions CI/CD.

---

# Features

- JWT Authentication
- Role-Based Authorization (RBAC)
- Product Management APIs
- Cart System
- Order Management
- Payment Simulation
- Exception Handling
- Request Validation
- In-Memory Caching
- Dockerized Application
- Docker Compose Multi-Container Setup
- Kubernetes Deployment
- GitHub Actions CI/CD Pipeline

---

# Tech Stack

## Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate

## Database
- PostgreSQL

## DevOps
- Docker
- Docker Compose
- Kubernetes
- GitHub Actions

---

# Project Architecture

Client → REST API → Spring Security → JWT Filter → Controllers → Services → Repositories → PostgreSQL

---

# Authentication Flow

1. User registers
2. User logs in
3. JWT token generated
4. Token sent in Authorization header
5. JWT filter validates token
6. Protected APIs become accessible

---

# API Endpoints

## Authentication

### Register
POST /api/auth/register

### Login
POST /api/auth/login

---

## Products

### Create Product
POST /api/products

### Get All Products
GET /api/products

### Get Product By Id
GET /api/products/{id}

---

## Cart

### Add To Cart
POST /api/cart

### Get User Cart
GET /api/cart

---

## Orders

### Place Order
POST /api/orders

### Get User Orders
GET /api/orders

---

# Docker

## Build Docker Image

```bash
docker build -t ecommerce-app .
````

## Run Container

```bash
docker run -p 8080:8080 ecommerce-app
```

---

# Docker Compose

## Run Multi-Container Setup

```bash
docker compose up --build
```

---

# Kubernetes

## Apply Kubernetes Configurations

```bash
kubectl apply -f k8s/
```

## Verify Pods

```bash
kubectl get pods
```

---

# CI/CD Pipeline

GitHub Actions pipeline automatically:

* Builds project
* Packages application
* Builds Docker image

Pipeline triggers on push to main branch.

---

# Future Improvements

* React Frontend
* Admin Dashboard
* Payment Gateway Integration
* Redis Cache
* Cloud Deployment (AWS/GCP/Azure)
* Monitoring & Logging
* Unit & Integration Testing

---

# Author

Built by iakpathan

```
```
