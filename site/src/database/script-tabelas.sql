create database judoarte;

use judoarte;

CREATE TABLE equipe (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nomeEquipe VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf char(11),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_equipe INT,
	FOREIGN KEY (fk_equipe) REFERENCES equipe(id)
);

CREATE TABLE aluno (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	dtNascimento DATE,
    faixa VARCHAR(45),
    peso decimal,
    altura decimal,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	fk_equipe INT,
	FOREIGN KEY (fk_equipe) REFERENCES equipe(id)
);

CREATE TABLE endereco (
	id INT PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(8),
	fk_aluno int,
    FOREIGN KEY (fk_aluno) REFERENCES aluno(id)
);

insert into equipe (nomeEquipe, cnpj) values 
('G13', '00000000000000'),
('Gracie Barra', '11111111111111'),
('Associação Shiroma', '22222222222222'),
('Equipe Jundiai', '33333333333333'),
('Cohab', '44444444444444');