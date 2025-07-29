# sample-node-mount-everest-webapp
This is sample node application for demo purpose.

# Deploy the sample Application with CI/CD pipeline:

# Pre-Requisition:

All the below dependancies and tools needs to install on linux server.

Create one ubuntu ec2 instance with ubuntu 22.04/t2.micro/t2.medium/20gb/all-traffic

* AWS Cli
* AWS configure
* Copilot Cli
* Docker
* Git

      sudo apt update

* AWS CLI installtion process:

      curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
      sudo apt install unzip
      unzip awscliv2.zip
      sudo ./aws/install
      aws configure
  
* Install AWS Copilot:

      curl -Lo copilot https://github.com/aws/copilot-cli/releases/latest/download/copilot-linux && chmod +x copilot && sudo mv copilot /usr/local/bin/copilot && copilot --help

* Docker installtion

      sudo vi docker.sh

      # Add Docker's official GPG key:
      sudo apt-get update
      sudo apt-get install ca-certificates curl
      sudo install -m 0755 -d /etc/apt/keyrings
      sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
      sudo chmod a+r /etc/apt/keyrings/docker.asc

      # Add the repository to Apt sources:
      echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
      sudo apt-get update
      sudo apt install docker.io -y
      sudo usermod -aG docker $USER
      sudo chown $USER /var/run/docker.sock
      sudo systemctl start docker
      sudo systemctl enable docker
      sudo systemctl status docker

      sudo chmod +x docker.sh
      ./docker.sh 
      docker --version
      git --version

  
  
