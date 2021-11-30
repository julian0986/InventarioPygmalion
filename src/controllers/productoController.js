const productos = require('../models/producto');

// agregar producto
exports.agregarProducto = async (req, res) => {
    const producto = new productos(req.body);

    try{
       await producto.save();
        res.status(200).send({
            message: 'Producto agregado correctamente'
        });
    } catch (error) {
        res.status(400).send(error);
        next();
    }
}


//mostrar producto
exports.mostrarProducto = async (req, res, next) => {
    try {
        const producto = await productos.findById(req.params.idProducto);
        res.render('crearproducto', {
            producto: producto
        });
       

    } catch (error) {   
        res.status(500).send(error);
        next();
    }

//mostrar productos
exports.mostrarProductos = async (req, res,next) => {
    
    try {
        const lsproducto = await productos.find();
        console.log(lsproducto);
        res.render("productos", {
            arrayproductos:lsproducto
        })

     //   res.json(lsproducto);
    } catch (error) {
        console.log(error);
        next();
     
    }
}

// modificar producto
exports.modificarProducto = async (req, res) => {
    try {
        const producto = await productos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send(producto);
    } catch (error) {
        res.status(400).send(error);
        next();
    }
}


//elimiinar producto
exports.eliminarProducto = async (req, res) => {
    try {
        await productos.findByIdAndDelete(req.params.id);
        res.status(200).send({
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(400).send(error);
        next();
    }
}