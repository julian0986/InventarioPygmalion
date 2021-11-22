const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.route")

const port = 3001;

app.use(indexRoutes)
app.listen(port, () =>{
    console.log(`Servidor escuchado en puerto ${port}`)
})



