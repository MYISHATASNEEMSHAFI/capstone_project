module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "${var.project_name}-eks"
  cluster_version = "1.33"

  cluster_endpoint_public_access = true

  vpc_id = aws_vpc.main.id

  subnet_ids = [
    aws_subnet.private_subnet_1.id,
    aws_subnet.private_subnet_2.id
  ]

  eks_managed_node_groups = {
    default = {
      instance_types = ["t3.medium"]

      min_size     = 2
      max_size     = 6
      desired_size = 5

       iam_role_additional_policies = {
        ebs_csi = "arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy"
      }

      subnet_ids = [
        aws_subnet.private_subnet_1.id,
        aws_subnet.private_subnet_2.id
      ]
    }
  }

  access_entries = {
    myisha = {
      principal_arn = "arn:aws:iam::622488711452:user/myisha"

      policy_associations = {
        admin = {
          policy_arn = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy"

          access_scope = {
            type = "cluster"
          }
        }
      }
    }
  }

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}