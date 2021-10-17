create database db_vr;
use db_vr;

create table if not exists products (
	id_product int auto_increment,
    name_product varchar(50),
    price_product int,
    image_product varchar(100),
    primary key (id_product) 
    );
    
create table if not exists employees (
	id_employee int primary key auto_increment,
    name_employee varchar(50),
    job_description varchar(100),
    image_employee varchar (50)
);

drop table products;
drop table employees;