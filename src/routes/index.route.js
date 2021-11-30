const express = require("express");
const Producto = require("../models/producto");
const productController = require("../controllers/productoController");
const router = express.Router();
const methodOverride = require("method-override");;

router.use(methodOverride("_method",{
    methods: ["POST","GET"]
}));


router.get("/", (req, res) => {
    /* res.send("Hola desde aquí") */
    res.render("index")
})


router.get("/productos", productController.mostrarProductos);

router.get("/producto/:id", productController.mostrarProducto);

router.delete("/producto/:id", productController.eliminarProducto);

//llamar la ruta antesd del post
router.get("/crear", (req, res) => {
    /* res.send("Hola desde aquí") */
    res.render("crearproducto",{
        producto:null
    })
})
//crear el post para enviar productos.
router.post("/", async (req, res) =>{
    const body = req.body;
    try {
        const id = body.id;
        if(id){
            const productoM = await Producto.findByIdAndUpdate(id, body, { new: true });
        } else{

            await Producto.create(body)

        }
        res.redirect("/productos")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;