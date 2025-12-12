CREATE TABLE IF NOT EXISTS student (
    id SERIAL PRIMARY KEY,          
    name VARCHAR(100) NOT NULL,     
    age INT CHECK (age > 0)        
);

