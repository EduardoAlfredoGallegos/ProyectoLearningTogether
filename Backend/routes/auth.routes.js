const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  validarToken,
  loginUsuario,
} = require("../controllers/auth.controller");
const { validacion } = require("../middleware/validar_campos");
const { validarJWT } = require("../middleware/validar_jwt");
const router = Router();
//Nuevo registro
router.post(
  "/new",
  [
    check(
      "nombre_usuario",
      "El nombre de usuario es requerido con un numero de caracteres entre 3 a 15"
    ).isLength({ min: 3, max: 15 }),
    check("correo", "Es requerido un email valido").isEmail(),
    check(
      "contrasena",
      "La contraseña es requerida con un numero de caracteres entre 8 a 15"
    ).isLength({ min: 8, max: 15 }),
    validacion
  ],
  crearUsuario
);
//Login
router.post(
  "/",
  [
    check("correo", "Ingrese su email correctamente").isEmail(),
    check(
      "contrasena",
      "La contraseña debe tener un numero de caracteres entre 8 a 15"
    ).isLength({ min: 8, max: 15 }),
    validacion
  ],
  loginUsuario
);
//Validar token
router.get("/tokenrenew", validarJWT, validarToken);
module.exports = router;
