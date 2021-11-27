create database projeto_individual;

use projeto_individual;


create table cadastro (
idcadastro INT PRIMARY KEY AUTO_INCREMENT,
nome varchar (45),
senha varchar (45)
);

select * from cadastro;
select * from quiz;
CREATE TABLE quiz(
idpontuacao int primary key auto_increment,
pontuacao int,
fkcadastro int,
FOREIGN KEY (fkcadastro) REFERENCES cadastro(idcadastro)
);
select idcadastro, nome, truncate(avg(pontuacao),2) as 'pontuacao', fkcadastro from cadastro join quiz on idcadastro = fkcadastro group by nome;

select * from cadastro join quiz on idcadastro = fkcadastro;

