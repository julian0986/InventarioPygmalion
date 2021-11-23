const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    /* res.send("Hola desde aquí") */
    res.render("index")
})

router.get("/productos", (req, res)=>{
    res.render("productos")
})
module.exports = router;