# Rent the bank locker 🏦 (lesson 10) — a private ECR repository as code.
# (The k8s course's terraform/ecr.tf does the same for its two services.)
#   terraform init && terraform apply
terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  default = "ap-south-1"
}

resource "aws_ecr_repository" "hello_school" {
  name                 = "hello-school"
  image_tag_mutability = "IMMUTABLE" # a tag, once pushed, can never be silently replaced

  image_scanning_configuration {
    scan_on_push = true # lesson 12: every push gets a vulnerability scan
  }
}

# The janitor rules 🧹 (lesson 11): keep the locker tidy automatically.
resource "aws_ecr_lifecycle_policy" "cleanup" {
  repository = aws_ecr_repository.hello_school.name
  policy     = file("${path.module}/lifecycle-policy.json")
}

output "repository_url" {
  value = aws_ecr_repository.hello_school.repository_url
}
