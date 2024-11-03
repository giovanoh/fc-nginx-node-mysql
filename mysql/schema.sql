USE nodeapp;

-- create
create table if not exists people (
  id int unsigned not null auto_increment primary key,
  name varchar(100) not null
);