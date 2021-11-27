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
//llamar la ruta antesd del post
router.get("/crear", (req, res) => {
    /* res.send("Hola desde aquí") */
    res.render("crearproducto")
})
//crear el post para enviar productos.
router.post("/", async (req, res) =>{
    const body = req.body;
    try {
        await Producto.create(body)
        res.redirect("/productos")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;