structural query language
used to communicate with databases.

--hospital management system 
--student management system


--activities
1. write a query for create table. --- create table student( id int primary key ,name varchar(20), age int );
2. insert ,select ,update ,delete -- 
 - insert into student values (1 , "omkar" , 20);
 - select * from student ;
 - update  table_name set name ="omkar " where id =1  ;
 - delete from student where id =1;



 connecting node.js to SQL databas
 we use node js backend 
 --npm install mysql2

write a syntax for 
post get put delete

app.post("/"(req,res)=>{
    const query = ""
    db.query(query , []) ,(err,result) =>{
        if(result){
            console.log("added sucessful")
        }

        else{
            console.log("connction failed");
        }
    }
})

app.get("/product" ,(req ,res)=>{
    const query=""
    db..query(query ),(err,result){
        if(result){
            res.json()
        }
        else{
            console.log("connction failed);
        }
    }
})