const productos = require('../models/producto');

// agregar producto
exports.agregarProducto = async (req, res) => {
    
    const body = req.body;
    try {
        const id = body.id;
        if(id){
            const productoM = await productos.findByIdAndUpdate(id, body, { new: true });
        } else{
            await productos.create(body)
        }
        res.redirect("/productos")
    } catch (error) {
        console.log(error)
    }


}


//mostrar producto
exports.mostrarProducto = async (req, res, next) => {
    try {       
        const producto = await productos.findById(req.params.id);
        res.render('crearproducto', {
            producto: producto
        });


    } catch (error) {
        res.status(500).send(error);
        next();
    }
}

//mostrar productos
exports.mostrarProductos = async (req, res, next) => {

    try {
        const lsproducto = await productos.find({});     
        res.render("productos", {
            arrayproductos: lsproducto
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
        const id = req.params.id;
        const producto = await productos.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        res.redirect("/productos")
    } catch (error) {
        res.status(400).send(error);
        next();
    }
}