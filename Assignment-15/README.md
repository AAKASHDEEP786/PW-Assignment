## Understand Docker & Containerization (Theoretical)

Before diving into commands, you should know:

  • Docker: A platform to build, ship, and run applications in containers.

  • Container: Lightweight, isolated environment that packages the app and its dependencies.

  • Docker vs Virtual Machine:

    • VM → full OS per instance, heavier.

    • Container → shares host OS, lightweight.

  • Docker Images: Read-only template (like a snapshot of your app).

  • Docker Containers: Running instance of an image.

  ## Step 2: Install Docker
  ```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```
Test Docker Installation:
```bash
docker run hello-world
```
## Step 3: Create a Dockerfile
A Dockerfile defines how to build a Docker image.
Example: Containerize a simple Python app

## Step 4: Build the Docker Image
```bash
docker build -t my-python-app .
```
## Step 5: Run the Docker Container
```bash
docker run --name python-container my-python-app
```
## Step 6: Verify & Manage Containers
• List running containers:
```bash
docker ps
```
• List all containers:
```bash
docker ps -a
```
• Stop a container:
```bash
docker stop python-container
```
• Remove a container:
```bash
docker rm python-container
```
• Remove an image:
```bash
docker rmi my-python-app
```
