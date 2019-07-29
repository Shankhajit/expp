var mysqldb=require('mysql')
var connection=mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
port:3306,
database:'dbfromnode'
})
connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("connected to database")

/*var multipleInsert="insert into friends (name,age,location) values ?"
var records=[
    ['obb',4,'chennai'],
    ['obc',5,'trichy'],
    ['oaa',6,'pune']
]

connection.query(multipleInsert,[records],(error,success)=>{
    if(error)
    {
        throw error
    }
    console.log(success)
})*/
var getAll="select * from friends"
connection.query(getAll,(error,success)=>{
    if(error){
        throw error
    }
    console.log(JSON.stringify(success))
})
})