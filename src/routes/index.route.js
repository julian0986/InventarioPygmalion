const express = require("express");
const Producto = require("../models/producto");
const productController = require("../controllers/productoController");
const router = express.Router();
const methodOverride = require("method-override");

router.get("/", (req, res) => {
  res.render("index");
});
//crear el post para enviar productos.
router.get("/productos/crear", (req, res) => {
  res.render("crearproducto");
});
router.post("/productos/", productController.agregarProducto);

/* router.use(methodOverride("_method",{
    methods: ["POST","GET"]
})); */

router.get("/productos", productController.mostrarProductos);

router.get("/productos/:id", productController.mostrarProducto);

router.put("/productos/:id", productController.modificarProducto);

router.delete("/producto/:id", productController.eliminarProducto);
//llamar la ruta antesd del post
/* router.get("/crear", (req, res) => {
    res.render("crearproducto",{
        producto:null
    })
}) */

module.exports = router;
