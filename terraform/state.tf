terraform {
  backend "local" {
    path = "/home/john/terraform.tfstate"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

//data "terraform_remote_state" "state" {
//  backend = "local"
//
//  config = {
//    path = "~/terraform.tfstate"
//  }
//}
