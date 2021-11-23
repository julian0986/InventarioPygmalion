const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route")
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

require("dotenv").config()
const port = process.env.PORT || 3001;

//conexion a db.

const uri =  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jvjwk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

const mongoose = require("mongoose");

mongoose
.connect(uri)
.then(()=>{console.log("mongo conectado")})
.catch((err)=>{console.log(err)});

app.use(indexRoutes)
app.listen(port, () =>{
    console.log(`Servidor escuchado en puerto ${port}`)
})



