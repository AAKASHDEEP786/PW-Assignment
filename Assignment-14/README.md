# Ansible Web Server Setup Assignment

## Inventory File (`hosts.ini`)
```ini
[webservers]
127.0.0.1 ansible_connection=local
# OR for remote server
# 192.168.x.x ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
```
Apache Playbook (webserver_setup.yml)
```bash
- name: Install and configure Apache web server
  hosts: webservers
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes

    - name: Install Apache
      apt:
        name: apache2
        state: present

    - name: Ensure Apache is running and enabled
      service:
        name: apache2
        state: started
        enabled: yes

    - name: Copy custom index.html
      copy:
        dest: /var/www/html/index.html
        content: "<h1>Welcome to My Apache Web Server</h1>"
```
Nginx Playbook (Optional)
```bash
- name: Install and configure Nginx web server
  hosts: webservers
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes

    - name: Install Nginx
      apt:
        name: nginx
        state: present

    - name: Ensure Nginx is running and enabled
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Copy custom index.html
      copy:
        dest: /var/www/html/index.html
        content: "<h1>Welcome to My Nginx Web Server</h1>"
```
Run Playbook
```bash
ansible-playbook -i hosts.ini webserver_setup.yml --ask-become-pass

```
