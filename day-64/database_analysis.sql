create table "employees"(
                            id bigserial ,
                            name text,
                            salary int,
                            active bool default true,
                            constraint pk_employee primary key(id)
);

create table "departments"(
                              id bigserial,
                              name text,
                              active bool default true,
                              constraint pk_department primary key (id)
);

insert into employees(id,name,salary) values (1,'A', 5000000),
                                             (2, 'B', 8000000),
                                             (3, 'C', 15000000),
                                             (4, 'D', 3000000),
                                             (5, 'A', 14000000),
                                             (6, 'F', 9500000),
                                             (7, 'G', 16000000),
                                             (8, 'H', 3500000),
                                             (9, 'C', 14500000),
                                             (10, 'D', 15500000);

insert into departments(id,name) values (1,'Logistics'),
                                        (2,'IT'),
                                        (3,'Marketing'),
                                        (4,'Sales'),
                                        (5,'Legal');

select * from employees order by id ;

select * from departments;

alter table employees add column department_id bigint;

update employees set department_id = 1 where id in(2,9);
update employees set department_id = 2 where id in (3,6,7);
update employees set department_id = 3 where id in (5,8);
update employees set department_id = 4 where id in (4);
update employees set department_id = 5 where id in (1,10);

-- 1
select employees.id, employees.name, json_build_object('id',departments.id,'name',departments
    .name) as department
from employees
         join departments on departments.id = employees.department_id
where true;

-- 2
select id, name, salary
from employees
where salary > 10000000
group by salary, name, id
order by id;

--3
select departments.id, departments.name, count(employees.id) as quantity
from departments
         join employees on employees.department_id = departments.id
where true
group by departments.id, departments.name
having count(employees.id) > 0
order by id;

--4
update employees set salary = 11000000 where id = 4;
select * from employees order by id;

--5
delete from employees where department_id = 4;
delete from departments where id = 4;





