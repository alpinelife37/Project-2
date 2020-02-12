DROP DATABASE IF EXISTS starGazer_db;

CREATE database starGazer_db;

USE starGazer_db;

CREATE TABLE constellations (
  id INT NOT NULL  AUTO_INCREMENT,
  name VARCHAR(255) NULL,
  abbr VARCHAR(255) NULL,
  meaning VARCHAR(255) NULL,
  PRIMARY KEY (id)
);