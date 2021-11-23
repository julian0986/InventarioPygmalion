const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route")

const port = 3001;

//conexion a db.

const user = "facilitador6";
const password = "PygmaFacili21Pyg";
const dbname = "pygmalion";

const uri =  `mongodb+srv://${user}:${password}@cluster0.jvjwk.mongodb.net/${dbname}?retryWrites=true&w=majority`

const mongoose = require("mongoose");

mongoose
.connect(uri)
.then(()=>{console.log("mongo conectado")})
.catch((err)=>{console.log(err)});

app.use(indexRoutes)
app.listen(port, () =>{
    console.log(`Servidor escuchado en puerto ${port}`)
})



