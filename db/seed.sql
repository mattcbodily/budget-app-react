create table if not exists budget_user (
    user_id serial primary key,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(150),
    password varchar(250)
);