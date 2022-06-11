CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(255),
    password_digest VARCHAR(100)
);