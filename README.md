# typescript-monorepo

# Terraform Starter

Helpful Terraform Links:

- [Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- [Install aws-cli2 and create IAM user in AWS and configure access key](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Terraform Language Documentation](https://www.terraform.io/docs/language/index.html)
- [Resource: aws_security_group](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group)
- [Resource: aws_instance](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance)

## Step 0: Create a `dev-ap-south.tfvars` file from the template

```
cp vars/template.tfvars vars/dev-ap-south.tfvars
```

## Step 1: Initialize Terraform

```
terraform init
```

## Step 2: Format Terraform

```
terraform fmt
```

## Step 3: Validate Terraform

```
terraform validate
```

## Step 4: Plan Resources

```
terraform plan -var-file="vars/dev-ap-south.tfvars" -auto-approve
```

## Step 5: Apply Resources

```
terraform apply -var-file="vars/dev-ap-south.tfvars" -auto-approve
```

## Step 6: SSH to instance to get the admin password

```
chmod 400 <keypair>
ssh -i <keypair> ec2-user@<public_dns>
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Step 7: Destroy Resources

```
terraform destroy -var-file="vars/dev-ap-south.tfvars" -auto-approve
```
