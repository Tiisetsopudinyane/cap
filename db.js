import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function insert(first_name,last_name,stuNo,photo){
const sql=`insert into students (first_name,last_name,stuNo,photo) values (?,?,?,?)`;
 await db.run(sql,[first_name,last_name,stuNo,photo])
}

export async function getData(){
    const sql=`select * from students`;
    return await db.all(sql);
}