create table if not exists budget_user (
    user_id serial primary key,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(150),
    password varchar(250)
);

create table if not exists budget (
    budget_id serial primary key,
    user_id int references budget_user(user_id),
    income int,
    bills int,
    shopping int,
    gas_travel int,
    going_out int,
    savings int,
    other int
);