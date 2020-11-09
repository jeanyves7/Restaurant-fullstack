Drop table if exists restaurants;

Create Table restaurants(
    id SERIAL ,
    name varchar(50),
    type Varchar(50),
    avgcostf2 varchar(70),
    address varchar (1000),
    phonenumber varchar(50),
    image varchar(50), PRIMARY KEY (id)
);

Drop TABLE IF EXISTS visitedrestaurants;

Create TABLE  visitedrestaurants(
    id SERIAL,
    name VARCHAR(50),
    visiteddate date,
    primary key (id)
);