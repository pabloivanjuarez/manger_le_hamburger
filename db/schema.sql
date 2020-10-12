DROP burger_db DATABASE IF EXISTS;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE plate
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (ID)
);
