# Kubernetes Assignment – Minikube

## Prereqs
- Docker Desktop (with WSL integration)
- minikube
- kubectl
- helm

## Steps taken
1) Start Minikube (create cluster)
   Use Docker as the driver (most common when Docker Desktop is installed):
   ```
    minikube start --driver=docker --memory=4098 --cpus=2
    # confirm kubectl context
    kubectl config current-context
    kubectl get nodes
  
## Commands used for debugging
- `kubectl get pods,svc,deployments,ingress`
- `kubectl logs <pod>`
- `kubectl describe <resource>`
- `kubectl exec -it <pod> -- /bin/sh`

