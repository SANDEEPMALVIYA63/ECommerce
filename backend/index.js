const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 5000;
const userRoutes = require('./routes/userRouter')
const adminRoutes = require('./routes/adminRouter') 
const producteRoutes = require('./routes/producteRoutes')
const db = require('./dbConnection')
db ('mongodb://localhost:27017/ECommerce')

const app=express();
app.use (cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',producteRoutes);
// app.use('/api',categaryRoutes);



// app.get('/test',(req,res)=>{
//     res.send({message:"hey buddy !" })
// })


app.listen(PORT,()=>{console.log("server started !❤️‍🔥")});