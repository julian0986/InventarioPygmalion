const productos = require("../models/producto");

// agregar producto
exports.agregarProducto = async (req, res) => {
  const body = req.body;
  try {
    await productos.create(body);
    res.redirect("/productos");
  } catch (error) {
    console.log(error);
  }
};

//mostrar producto
exports.mostrarProducto = async (req, res, next) => {
  try {
    const producto = await productos.findOne({ _id: req.params.id });
    res.render("detalle", {
      producto: producto,
    });
  } catch (error) {
    res.status(500).send(error);
    next();
  }
};

//mostrar productos
exports.mostrarProductos = async (req, res, next) => {
  try {
    const lsproducto = await productos.find({});
    res.render("productos", {
      arrayproductos: lsproducto,
    });

    //   res.json(lsproducto);
  } catch (error) {
    console.log(error);
    next();
  }
};

// modificar producto
exports.modificarProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const producto = await productos.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    res.json({ estado: true, mensaje: "editado" });
  } catch (error) {
    res.json({ estado: false, mensaje: "fallo" });
    next();
  }
};

//elimiinar producto
exports.eliminarProducto = async (req, res) => {
  try {
    await productos.findByIdAndDelete(req.params.id);
    res.redirect("/productos");
  } catch (error) {
    res.status(400).send(error);
    next();
  }
};
