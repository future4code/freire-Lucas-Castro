CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

DESCRIBE Actor

##Exercício 1:
A) desclara uma string com n caracteres e date declara uma numeração com formato de data
B)Show dabatases mostra quais são os banco de dados disponíveis e show tables  mostra quais são as tabelas criadas dentro de determinado
banco de dados.
C)O comando describe mostra na tabela as características de determinada tabela.

##Exercício 2:
A)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
)

B)
Ao adicionar outro ator com o a mesma id, ocorre o erro 1062 de entrada duplicada para a chave primária.

C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
)

Erro: A quantidade de colunas não é compatível com a quantidade de linhas

D)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Tiringa",
  400000,
  "1949-04-18", 
  "male"
)
Erro: O campo nome não possui um valor.

E)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
)
Erro: Formato incorreto para o campo data.

F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Adamastor Pitaco",
  600,
  "1922-03-26", 
  "male"
)

##Exercício 3:
A)
Select * from Actor Where gender="female"
B)
Select salary from Actor Where name="Tony Ramos"
C)
Select * from Actor Where gender="invalid"
Erro: É retornado uma tabela com campos nulos.
D)
Select id,name,salary from Actor Where salary<=500000
E)
SELECT id, name from Actor WHERE id = "002"
Erro:Não existe a coluna nome e sim name.

##Exercício 4:
A)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
Resposta: A query acima busca todas as informações dos atores que possuem nome que se iniciam com A ou J e recebem salário maior que 300 mil.
B)
Select * from Actor WHERE name NOT LIKE "A%" AND salary>350000
C)
Select * from Actor Where (name LIKE "%g%" OR name LIKE "%G%")
D)
Select * from Actor Where (name LIKE "%a%" or name LIKE "%A%" or name like "%g%" or name like "%G%") and salary between 350000 and 950000

##Exercício 5:
A)

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,	
    release_date DATE NOT NULL,
    rate FLOAT NOT NULL
)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
  "002",
  "Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
  )
  
INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
  "004",
  "O Homem do Ano",
  "Na periferia da Baixada Fluminense, uma ingênua aposta entre amigos transforma Máiquel.",
  "2003-08-01", 
  "10"
  )
  
  ##Exercício 6:
  A)
  Select id,name,rate from Movies where id="001"
  B)
  Select* from Movies where name="O Homem do Ano"
  C)
  Select id,name,sinopse from Movies where rate>=7
  
  ##Exercício 7:
  A)
  Select * from Movies Where name LIKE "%vida%"
  B)
  Select * from Movies Where name LIKE "%flor%"
  C)
  Select * from Movies where release_date<"2022-08-24"
  D)
  Select * from Movies Where (sinopse LIKE "%aposta%" OR name LIKE "%aposta%") AND release_date<"2022-08-24"
  
  





