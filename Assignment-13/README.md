# Ansible Assignment

## Objective
Install and configure Ansible on a local environment and execute basic configuration scripts (playbooks).

---

## Step 1: Install Ansible

Run the following commands to install Ansible on Ubuntu/Linux:

```bash
sudo apt update
sudo apt install ansible -y
```
## Check installation:
    ```bash
    ansible --version
    ```
## Step 2: Configure Inventory
    Create a folder for the assignment:
    ```bash
    mkdir ansible-assignment && cd ansible-assignment
    ```
Create an inventory file named inventory:
    ```bash
    nano inventory
    ```
Add the following content for localhost:
    ```bash
    [local]
    localhost ansible_connection=local
    ```
## Step 3: Test Connection
Run the ping module to verify Ansible can communicate with localhost:
    ```bash
    ansible all -i inventory -m ping
    ```
## Step 4: Create a Basic Playbook
Create a file named setup.yml:
```bash
nano setup.yml
```
Add the following content:

---
- name: Basic Ansible Setup
  hosts: local
  become: true
  tasks:
    - name: Update system packages
      apt:
        update_cache: yes

    - name: Install nginx web server
      apt:
        name: nginx
        state: present

    - name: Start nginx service
      service:
        name: nginx
        state: started
        enabled: true
---

## Step 5: Run the Playbook
    ```bash
    ansible-playbook -i inventory setup.yml --ask-become-pass
    ```
## Step 6: Verify Nginx Installation
    ```bash
    sudo systemctl status nginx
    ```
You should see active (running).