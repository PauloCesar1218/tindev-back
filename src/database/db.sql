CREATE DATABASE tindev;
USE tindev;
CREATE TABLE users (
    id INT PRIMARY KEY auto_increment,
    github_username VARCHAR(50) UNIQUE NOT NULL,
    nome VARCHAR(50) UNIQUE NOT NULL,
    image_url VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(20) UNIQUE NOT NULL,
    age INT NOT NULL,
    bio TEXT
);