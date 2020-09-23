provider "aws" {
  region = "us-west-2"
}


variable "default_tags" {
  type        = map(string)
  default     = {
      description = "Do Not Edit: Managed by Terraform."
  }
}