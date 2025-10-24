# Kubernetes Assignment — Minikube

## Prereqs
- Docker Desktop (with WSL integration)
- minikube
- kubectl
- helm (optional, for charts)

## Steps taken
1. Start minikube: `minikube start --driver=docker`
2. Apply resources: `kubectl apply -f k8s/deployment.yaml -f k8s/service.yaml`
3. Access service: `minikube service nginx-service --url`
4. (Optional) Ingress: `kubectl apply -f k8s/ingress.yaml`
5. Helm chart: `helm create my-nginx-chart && helm install my-nginx ./my-nginx-chart`

## Commands used for debugging
- `kubectl get pods,svc,deployments,ingress`
- `kubectl logs <pod>`
- `kubectl describe <resource>`
- `kubectl exec -it <pod> -- /bin/sh`

