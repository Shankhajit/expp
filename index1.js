var express=require('express')
var mysql=require('mysql')
var bodyparser=require('body-parser')
var cors=require('cors')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbfromnode',
    port:3306

})
connection.connect((error)=>{
    if(error)
    {
        throw error
    }
    console.log("Connected to dbfromnode database")
})
var expressApp=express()
expressApp.use(cors())
expressApp.use(bodyparser.json())

expressApp.get('/friend/:id',(req,res)=>{
    //res.send("All friends: <br>")
   console.log(req)
   console.log("Received: "+req.params.id)
   var qry="select * from friends where id=?"
    connection.query(qry,req.params.id,(error,success)=>{
        if(error)
        {
            throw error
        }
        console.log(JSON.stringify(success))
       // res.send (JSON.stringify(success))
        //connection.end()
      
    })
    res.end()
})

expressApp.get('/all',(req,res)=>{
    var qry="select * from friends"
    connection.query(qry,(error,success)=>{
        if(error)
        {
            throw error
        }
        console.log(JSON.stringify(success))
        res.send(JSON.stringify(success))
        res.end()
    })
})
    

/*expressApp.get('/hello',(req,res)=>{
    res.send("Message : Hello ")
    console.log(req.query)

})*/

expressApp.post("/add",(req,res)=>{
    console.log("post received")
    console.log(req.body)
    console.log(req.body.name)
})
expressApp.listen(1300)