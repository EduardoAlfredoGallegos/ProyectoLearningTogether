const Usuario = require("../models/user_model");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res) => {
  const { nombre_usuario, correo, contrasena } = req.body;
  try {
    //Verificacion email
    let usuario = await Usuario.findByCorreo( correo );
    if (usuario) {
      return res.status(400).json({
        ok: false,
        mensaje: "El email ya esta registrado",
      });
    }
    usuarioDB = new Usuario(req.body);
    usuarioDB.puntaje=0;
    //Encriptado de contrasena
    const salt = bcrypt.genSaltSync();
    usuarioDB.contrasena = bcrypt.hashSync(contrasena, salt);
    //Generar JWT
    const token = await generarJWT(usuarioDB.id, nombre_usuario);
    //Crear usuario en la DB
    console.log(usuarioDB);
    await Usuario.create(usuarioDB);
    return res.status(201).json({
      ok: true,
      id: usuarioDB.id,
      nombre_usuario: usuarioDB.nombre_usuario,
      token,
    });
    //Respuesta Exitosa
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      mensaje: "Vaya, un error",
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, contrasena } = req.body;
  try {
    //Verificar email
    const usuarioDB = await Usuario.findByCorreo({email:email});
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        mensaje: "El email no encontrado",
      });
    }
    //Verificar contrasena
    const validacontra = bcrypt.compareSync(contrasena, usuarioDB.contrasena);
    if (!validacontra) {
      return res.status(400).json({
        ok: false,
        mensaje: "Contraseña invalida",
      });
    }
    //Generar token
    const token = await generarJWT(usuarioDB.id, usuarioDB.nombre);
    //Respuesta login
    return res.json({
      ok: true,
      id: usuarioDB.id,
      nombre: usuarioDB.nombre,
      token,
      mensaje: "Login con /",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      mensaje: "Error, contactate con el adm",
    });
  }
};

const validarToken = async (req, res) => {
  const { uid, nombre } = req;
  const token = await generarJWT(uid, nombre);
  return res.json({
    ok: true,
    uid,
    nombre,
    token,
    mensaje: "Validando token con /tokenrenew"
  });
};
module.exports = {
  crearUsuario,
  loginUsuario,
  validarToken,
};
