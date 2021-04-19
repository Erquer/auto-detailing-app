drop table if exists Services cascade;
drop table if exists Workers cascade;
drop table if exists Clients cascade;
drop table if exists Cars cascade;
drop table if exists Orders cascade;
drop table if exists ServiceInOrder cascade;

create table if not exists Services(
	service_id SERIAL PRIMARY KEY,
	service_name varchar(40) NOT NULL,
	service_cost integer NOT NULL,
	service_duration_time integer NOT NULL,
	service_price integer NOT NULL
);
create table if not exists Workers(
	worker_id SERIAL PRIMARY KEY,
	worker_name varchar(30) NOT NULL,
	worker_surname varchar(30) NOT NULL,
	worker_salary_per_hour integer NOT NULL check (worker_salary_per_hour > 0),
	worker_working_hours_per_day integer NOT NULL check (worker_working_hours_per_day > 0),
	constraint u_worker_name unique(worker_name, worker_surname)
);
create table if not exists Clients(
	client_id SERIAL PRIMARY KEY,
	client_name varchar(30) NOT NULL,
	client_surname varchar(30) NOT NULL,
	constraint u_client_name unique(client_name, client_surname)
);
create table if not exists Cars(
	car_id SERIAL PRIMARY KEY,
	car_registration varchar(10) NOT NULL,
	car_model varchar(20) NOT NULL,
	car_version varchar(20),
	car_color varchar(30),
	car_owner_id integer NOT NULL,
	foreign key (car_owner_id) REFERENCES Clients(client_id) 
);

create table if not exists Orders(
	order_id SERIAL PRIMARY KEY,
	order_date date NOT NULL,
	order_deadline date,
	order_status boolean default false,
	order_worker_id integer,
	order_client_id integer,
	order_car_id integer,
	FOREIGN KEY (order_worker_id) REFERENCES Workers(worker_id),
	FOREIGN KEY (order_client_id) REFERENCES Clients(client_id),
	FOREIGN KEY (order_car_id) REFERENCES Cars(car_id)
);
create table if not exists ServiceInOrder(
	service_id integer NOT NULL,
	order_id integer NOT NULL,
	PRIMARY KEY (service_id, order_id),
	FOREIGN KEY (service_id) REFERENCES Services(service_id),
	FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

insert into Services
    (service_name, service_cost, service_duration_time, service_price) VALUES
                                                                        ('Mycie one-step', 70, 3, 50),
                                                                        ('Mycie wieloetapowe', 100, 5, 80),
                                                                        ('Woskowanie 1', 30, 2, 60),
                                                                        ('Woskowanie 2', 40, 3, 80),
                                                                        ('Woskowanie 3', 60, 5, 100),
                                                                        ('Polerowanie zwykłe', 80, 8, 120);
