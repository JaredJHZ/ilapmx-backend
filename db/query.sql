CREATE DATABASE ilapmx;

USE ilapmx;

CREATE TABLE USER (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(15) NOT NULL,
    email VARCHAR(55) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE(user),
    UNIQUE(email) 
);

CREATE TABLE COMMENTS (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user INTEGER NOT NULL,
    comment VARCHAR(140) NOT NULL,
    FOREIGN KEY(user) REFERENCES USER(id)
);

CREATE TABLE TOKENS(
    user INTEGER NOT NULL,
    token VARCHAR(555) PRIMARY KEY,
    FOREIGN KEY(user) REFERENCES USER(id)
);
