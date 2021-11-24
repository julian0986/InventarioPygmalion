const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//constructor
const productoschema = new Schema({
    nombre:String,
    descripcion:String,
    cantidad:Number,
    preciosin:Number,
    iva:Number,
    proveedor:String,
})
//instanciar el constructor
const Producto = mongoose.model("Producto", productoschema)

module.exports = Producto;