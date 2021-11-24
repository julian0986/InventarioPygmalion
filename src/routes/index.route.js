const express = require("express");
const Producto = require("../models/producto");
const router = express.Router();

router.get("/", (req, res) => {
    /* res.send("Hola desde aquí") */
    res.render("index")
})

router.get("/productos", async (req, res)=>{
    try {
        const arraydb = await Producto.find()
        res.render("productos", {
            arrayproductos:arraydb
        })
    } catch (error) {
        console.log(error)
    }

})
module.exports = router;