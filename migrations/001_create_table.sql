create table IF NOT EXISTS students (
    id integer primary key AUTOINCREMENT,
    first_name text,
    last_name text,
    stuNo NUMBER,
    photo LONGBLOB
);