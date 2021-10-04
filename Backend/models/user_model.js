const { stringify } = require("uuid");
const sql = require("./db.js");

// constructor
const Usuario = function (usuario) {
  this.correo = usuario.correo;
  this.nombre_usuario = usuario.nombre_usuario;
  this.contrasena = usuario.contrasena;
  this.puntaje = usuario.puntaje;
};

Usuario.create = (nuevoUsuario) => {
  sql.query(
    "INSERT INTO `ltdb`.`usuario` (`nombre_usuario`, `correo`, `contrasena`, `puntaje`) VALUES (?, ?, ?, ?);",
    [nuevoUsuario.nombre_usuario, nuevoUsuario.correo, nuevoUsuario.contrasena, nuevoUsuario.puntaje],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      console.log("Creando usuario: ", {
        id: res.insertId,
        ...nuevoUsuario,
      });
    }
  );
};

Usuario.findByCorreo = (correo) => {
  sql.query(`SELECT * FROM usuario WHERE correo = ?`, [correo], (err, res) => {
    if (err) {
      console.log("error: ", err);
      return;
    }

    if (res.length) {
      console.log("Usuario encontrado: ", res[0]);
      return;
    }
    // not found Customer with the id
  });
};

module.exports = Usuario;
