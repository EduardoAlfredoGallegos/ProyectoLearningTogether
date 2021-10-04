const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      mensaje: "No hay token",
    });
  }
  try {
    const { uid, nombre } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid=uid;
    req.nombre=nombre;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      mensaje: "Token invalido",
    });
  }
  next();
};

module.exports = {
  validarJWT,
};
