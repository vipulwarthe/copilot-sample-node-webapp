# sample-node-mount-everest-webapp

Deploy Sample Node Application(Any) using AWS Copilot With Complete VPC,ECS and CI/CD

    Link: https://medium.com/@laamasabin97/deploy-sample-node-application-using-aws-copilot-with-complete-vpc-ecs-and-ci-cd-00c7e57f77df
    Repo link: https://github.com/vipulwarthe/copilot-sample-node-webapp.git

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

  Clone the Repo:

      git clone https://github.com/vipulwarthe/copilot-sample-node-webapp.git
      cd copilot-sample-node-webapp
      copilot app init

* Name of Application - test-node-app

* Name of environment - dev

* Name of Service SVC - nodeapp

* Name of Pipeline - nodeapp-pipeline

  
      copilot app ls
      copilot env init

select all setting as default it will create the deployment for you.

    copilot env deploy --name dev
    copilot env ls
    copilot svc init -n nodeapp
    copilot svc deploy --name nodeapp --env dev
    copilot svc ls

no need to run below 2 commands:

    copilot svc show -n nodeapp -e dev
    copilot svc exec -n nodeapp -e dev

    copilot pipeline init
  
give the name for your pipeline as above mentioned and select the dev environement.

    github token new: 

Reconfigure the manifest of the pipeline if required /copilot/pipelines/<name_of_pipeline>/manifest.yml.

Add, Commit and Push the changes into your repositories.

    git status
    git add .
    git commit -m “added pipeline”
    git push origin -u main

    copilot pipeline deploy –name nodeapp-pipeline

 ACTION REQUIRED! Go to https://console.aws.amazon.com/codesuite/settings/connections to update the status of connection copilot-vipul-copilot-sample-nod from PENDING to AVAILABLE.

- you need to click on update pending connection - add the github it will automatically
✔ Successfully created a new pipeline: nodeapp-pipeline

you can go to aws codepipeline service to see the pipeline. you get the succefully created pipeline.
   
Destroy the infrastructure:

To destroy at once:

    copilot app delete -n test-node-app

Conclusion:

Hence, you are able to deploy your project into the ECS using a copilot with a pipeline.    
