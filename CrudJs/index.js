const express=require('express');
const userRouter=require('./routes/users');
const mongoose=require('mongoose');
const passwordReset=require("./routes/passwordReset");
require("dotenv").config();



const app=express();
const PORT=8080;
const connURL="mongodb+srv://Sanchit11:HeyMongo123@cluster0.guhdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const con=mongoose.connection;
con.on('open', ()=>{
    console.log("Connected To Database");
})
app.use(express.json());

app.use('/users',userRouter);
app.use('/password-reset',passwordReset);


app.get('/',function(req,res){

    res.send('hello from homepage')

});
//mongodb+srv://Sanchit11:<password>@cluster0.guhdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.listen(PORT,function(){
    console.log("Server running")
})