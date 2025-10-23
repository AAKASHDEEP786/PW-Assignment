# 🐳 Docker Fundamentals Assignment

## 🎯 Objective
To understand the fundamentals of Docker and use **Docker Compose** to define and run a **multi-container application** (Frontend + Backend + Database + Cache).

---

## 🧠 Overview
This project demonstrates how to containerize and run a full-stack web application using Docker.  
It includes:
- **MongoDB** as the database  
- **Node.js Backend** (Express + Mongoose)  
- **React Frontend**  
- **Redis** for caching  

All services are orchestrated using **Docker Compose**.

---

## How to Run the Project
1️⃣ Build and Start Containers
```
docker-compose up --build
```
2️⃣ Verify Running Containers
```
docker ps
```
You should see containers for:

● mongo-service

● backend

● frontend

● redis-service

Verify Functionality

● Backend → http://localhost:31100

● Frontend → http://localhost:5173

● MongoDB → port 27017

● Redis → internal port 6379

## 🏁 Conclusion

This assignment helped in understanding how multiple services (frontend, backend, and databases) 
can communicate and run together inside Docker containers using Docker Compose.
