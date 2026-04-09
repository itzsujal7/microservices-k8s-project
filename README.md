## Microservices Deployment using Docker & Kubernetes


![Kubernetes](https://img.shields.io/badge/Kubernetes-Enabled-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Status](https://img.shields.io/badge/Project-Completed-success)




##  Project Overview
This project demonstrates a complete **microservices architecture** deployed using **Docker** and **Kubernetes (Minikube)**.

It consists of multiple Node.js-based services:
-  User Service
-  Product Service
-  Order Service

Each service is containerized using Docker and deployed on Kubernetes with scalability and service communication.

---

##  Tech Stack

- Node.js
- Docker
- Kubernetes (Minikube)
- Kubectl

---

##  Docker Images

- sujalpandharpatte/user-service
- sujalpandharpatte/product-service
- sujalpandharpatte/order-service

---

##  Kubernetes Components

- **Deployments** – Manage pods and scaling
- **Services (NodePort)** – Expose applications externally
- **ClusterIP** – Internal service communication
- **Horizontal Pod Autoscaler (HPA)** – Auto scaling based on CPU
- **Persistent Volume (PV)** – Storage
- **Persistent Volume Claim (PVC)** – Storage request

---

##  Project Structure
```
microservices-k8s-project/
│
├── user-service/
├── product-service/
├── order-service/
├── k8s/
├── screenshots/
└── README.md
```
---

##  How to Run

### 1 Start Minikube
```bash
minikube start

```
##  2 Apply Kubernetes manifests
```bash
kubectl apply -f k8s/
```

## 3 Verify Pods
```bash
kubectl get pods
```

## 4 Access Application
```bash
minikube service user-service
```
## 5 Inter-Service Communication
Services communicate internally using ClusterIP:

http://product-service
http://order-service

## Challenges Faced

 Wrong Docker image used in deployment
 Port mismatch (3000 vs 8080)
 Dockerfile naming issue (Dockerfile.txt)
 Service communication failure

## Solutions Implemented

Fixed Docker image and rebuilt container\n
Corrected containerPort and targetPort\n
Renamed Dockerfile properly\n
Verified service DNS and connectivity\n

## Outcome

Successfully deployed microservices on Kubernetes
Enabled inter-service communication
Implemented autoscaling using HPA
Integrated persistent storage using PV/PVC

## Author

Sujal Pandharpatte
