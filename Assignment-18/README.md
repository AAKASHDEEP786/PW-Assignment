# Kubernetes Assignment 1

## Task
● Deploy a Kubernetes cluster with 3 nodes
● Create an NGINX deployment with 3 replicas

Step 1: Start Minikube with 3 nodes
```
minikube start --nodes=3
```
Check nodes:
```
kubectl get nodes
```

Step 2: Create an NGINX Deployment
● Create file: nginx-deployment.yaml
Apply it:
```
kubectl apply -f nginx-deployment.yaml
```
Verify:
```
kubectl get deployments
kubectl get pods -o wide
```
# Kubernetes Assignment 2
## Task
● Use previous deployment
● Create a Service of type NodePort for NGINX
● Access it in browser

Steps:
● Create file: nginx-service-nodeport.yaml
Apply it:
```
kubectl apply -f nginx-service-nodeport.yaml
```
Check:
```
kubectl get svc
```
Get Minikube IP:
```
minikube ip
```
Open in browser:
```
http://<MINIKUBE_IP>:30008
```
You should see the NGINX default welcome page.

# Kubernetes Assignment 3
## Task
● Change replicas from 3 → 5

Steps
Edit YAML:
```
spec:
  replicas: 5
```
Apply again:
```
kubectl apply -f nginx-deployment.yaml
```
Verify:
```
kubectl get pods
```

# Kubernetes Assignment 4
## Task
● Change Service type to ClusterIP

Steps:
Edit service YAML:
```
spec:
  type: ClusterIP
```
Apply:
```
kubectl apply -f nginx-service-nodeport.yaml
```
Check:
```
kubectl get svc
```

# Kubernetes Assignment 5
## Task
● Deploy another NGINX deployment (3 replicas)
● Create a ClusterIP service for it
● Create an Ingress to route traffic (e.g., /nginx → NGINX service)

Steps:
1️) Deployment
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deploy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx2
  template:
    metadata:
      labels:
        app: nginx2
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```
2️) Service
```
apiVersion: v1
kind: Service
metadata:
  name: nginx2-service
spec:
  selector:
    app: nginx2
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 80
```
3️) Ingress
Make sure ingress addon is enabled:
```
minikube addons enable ingress
```
Then create nginx-ingress.yaml:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: my-nginx.local
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx2-service
            port:
              number: 80
```
Apply all:
```
kubectl apply -f nginx-deploy.yaml
kubectl apply -f nginx2-service.yaml
kubectl apply -f nginx-ingress.yaml
```
Get Minikube IP:
```
minikube ip
```
Edit and add /etc/hosts file:
```
<MINIKUBE_IP>  my-nginx.local
```
Then open in browser:
```
http://my-nginx.local
```
