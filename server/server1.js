const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=1336;
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use("/tasks",tasks);
app.get('/',function(req,res){
    res.send("hello from server"+port);
});

app.post('/createTask',function(req,res){
    
    console.log(req.body);
    res.json(req.body);
});

app.listen(port,function()
{
    console.log("Server running on localhost:" +port);
});