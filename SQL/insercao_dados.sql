CREATE TABLE aluno (
	id NUMBER,
    nome VARCHAR(50),
    PRIMARY KEY (id)
)

CREATE TABLE responsavel (
	id NUMBER,
    nome VARCHAR(50),
    PRIMARY KEY (id)
)

CREATE TABLE parentesco (
	id NUMBER,
    id_responsavel NUMBER,
    id_aluno NUMBER,
    parentesco VARCHAR(50),
    PRIMARY KEY (id),
	CONSTRAINT fk_id_responsavel FOREIGN KEY (id_responsavel) REFERENCES responsavel (id),
    CONSTRAINT fk_id_aluno FOREIGN KEY (id_aluno) REFERENCES aluno (id)
)

INSERT INTO aluno VALUES (1, 'Lucas');
INSERT INTO responsavel VALUES (1, 'Pablo');
INSERT INTO responsavel VALUES (2, 'Brenda');
INSERT INTO parentesco VALUES (1, 1, 1, 'Pai');
INSERT INTO parentesco VALUES (2, 2, 1, 'Mãe');
