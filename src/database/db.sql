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
CREATE TABLE profile_conversation (
	id_conversation INT PRIMARY KEY AUTO_INCREMENT,
	id_profile1 INT NOT null,
	id_profile2 INT NOT NULL,
	created_at DATETIME
);
CREATE TABLE conversation_messages (
	id_menssage INT PRIMARY KEY AUTO_INCREMENT,
	id_conversation INT NOT NULL,
	id_profile INT NOT NULL, 
	content TEXT NOT NULL,
	created_at DATETIME,
	deleted_at DATETIME
);
