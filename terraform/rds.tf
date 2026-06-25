resource "aws_db_subnet_group" "main" {
  name = "${var.project_name}-db-subnet-group"

  subnet_ids = [
    aws_subnet.private_subnet_1.id,
    aws_subnet.private_subnet_2.id
  ]

  tags = {
    Name = "${var.project_name}-db-subnet-group"
  }
}

resource "aws_db_instance" "mysql" {

  identifier = "${var.project_name}-mysql"

  engine         = "mysql"
  engine_version = "8.0.43"

  instance_class = "db.t3.micro"

  allocated_storage = 20

  db_name = "notes_db"

  username = var.db_username

  password = var.db_password

  publicly_accessible = false

  multi_az = false

  skip_final_snapshot = true

  db_subnet_group_name = aws_db_subnet_group.main.name

  vpc_security_group_ids = [
    aws_security_group.rds_sg.id
  ]

  tags = {
    Name = "${var.project_name}-mysql"
  }
}