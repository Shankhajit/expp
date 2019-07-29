var mysqldb=require('mysql')
var connection=mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
port:3306,


})

/*connection.connect(function(error)
{
    if(error){
        console.log(error)
        throw error
    }
    console.log("connected to my SQL server")
    var insertQuery="insert into friend(id,name,years,location)  values (1,'shankha',25,'chennai')"
    connection.query(insertQuery,function(error,success){
        if(error)
        {
            console.log(error)
            throw error
            
        }
        console.log("1 row inserted")
    })
})*/


connection.connect((error)=>{
    if(error)
    {
        throw error
    }
    console.log("Connected to My SQL Database")
    var createDbQuery="create database newDB"
    connection.query(createDbQuery,(error,success)=>{
        if(error)
        {
            throw error
        }
        console.log("Database Created")
    })

})
