# Kubernetes Assignment – Minikube

## Prereqs
- Docker Desktop (with WSL integration)

## Setup Minikube
1) Install Minikube
   Run this inside terminal:
   ```
   curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
   sudo install minikube-linux-amd64 /usr/local/bin/minikube
   ```
   Then verify:
   ```
   minikube version
   ```
    Start Minikube (create cluster)
    Used Docker as the driver:
    ```
    minikube start --driver=docker --memory=4098 --cpus=2
    # confirm kubectl context
    kubectl config current-context
    kubectl get nodes
  
 2) Deploy a simple app (Deployment + Service)
    – Create deployment.yaml
    – Create service.yaml
    – ingress.yaml

   Apply them:
   ```
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   kubectl apply -f ingress.yaml
   ```
   Check:
   ```
   kubectl get pods
   kubectl get svc
   kubectl get ingress
   ```
   view URL
   ```
   minikube service nginx-service --url
   ```
   Open the URL printed by minikube service ... --url.
   
 3) Resource management:
    Basic listing:
    ```
    kubectl get pods
    kubectl get deployments
    kubectl get svc
    kubectl get ingress
    kubectl get all
    
   Inspect & debug:
   ```
   kubectl describe pod <pod-name>
   kubectl logs <pod-name>
   kubectl logs -l app=nginx-app        
   kubectl exec -it <pod-name> -- /bin/sh
   ```
   Rolling update / scale:
   ```
   # scale
   kubectl scale deployment/nginx-deploy --replicas=4
   
   # update image (rolling update)
   kubectl set image deployment/nginx-deploy nginx=nginx:1.23-alpine
   
   # check rollout status
   kubectl rollout status deployment/nginx-deploy
   kubectl rollout history deployment/nginx-deploy
   kubectl rollout undo deployment/nginx-deploy  # rollback
   ```
   Delete:
   ```
   kubectl delete -f deployment.yaml -f service.yaml -f ingress.yaml
   ```
4) Helms Charts
   If Helm isn’t installed, install it:
   ```
   curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
   helm version
   ```
   Create a chart:
   ```
   helm create my-nginx-chart
   ```
   Edit my-nginx-chart/values.yaml to set image and service type:
   ```
   image:
     repository: nginx
     tag: alpine
   service:
     type: NodePort
     port: 80
   ```
   Install the chart:
   ```
   helm install my-nginx ./my-nginx-chart
   helm list
   # to see kubernetes resources created by helm
   kubectl get all -l app.kubernetes.io/instance=my-nginx
   ```
   Upgrade after change:
   ```
   # change values.yaml or templates, then
   helm upgrade my-nginx ./my-nginx-chart
   ```
   Packaging
   ```
   helm package my-nginx-chart
   # creates my-nginx-chart-0.1.0.tgz
   helm install my-nginx ./my-nginx-chart-0.1.0.tgz
   ```
   Uninstall:
   ```
   helm uninstall my-nginx
   ```
   




