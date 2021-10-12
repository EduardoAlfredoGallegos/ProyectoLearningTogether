const { pool } = require("../database/config");

const getPregunta = async (req, res) => {
  const { dificultad, topic } = req.params;
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM ejercicios WHERE dificultad = ? AND idtopic = ?",
      [dificultad, topic],
      (err, rows) => {
        if (err) reject(err.message);
        if (rows.length > 0) {
          var numeroAleatorio = Math.floor(Math.random()*rows.length);
          res.json({
            ok: true,
            text: "Obtiene una sola pregunta: " + numeroAleatorio,
            data: rows[numeroAleatorio],
          });
        } else {
          res.json({
            ok: false,
            text: "Preguntas no encontradas",
          });
        }
      }
    );
  });
};

const getRespuestaAudio = async (req, res) => {
  const { id } = req.params;
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM pregunta_audio WHERE idejer = ?",
      [id],
      (err, rows) => {
        if (err) reject(err.message);
        if (rows.length > 0) {
          res.json({
            ok: true,
            text: "Respuestas encontradas",
            data: rows,
          });
        } else {
          res.json({
            ok: false,
            text: "Respuestas no encontradas",
          });
        }
      }
    );
  });
};

const getRespuestaSeleccion = async (req, res) => {
  console.log("llegó aqui");
  const { id } = req.params;
  console.log(id);
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM pregunta_seleccion WHERE idejer = ?",
      [id],
      (err, rows) => {
        if (err) reject(err.message);
        if (rows.length > 0) {
          res.json({
            ok: true,
            text: "Respuestas encontradas",
            data: rows,
          });
        } else {
          res.json({
            ok: false,
            text: "Respuestas no encontradas",
          });
        }
      }
    );
  });
};

const getRespuestaEscrita = async (req, res) => {
  const { id } = req.params;
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM pregunta_escita WHERE idejer = ?",
      [id],
      (err, rows) => {
        if (err) reject(err.message);
        if (rows.length > 0) {
          res.json({
            ok: true,
            text: "Respuestas encontradas",
            data: rows,
          });
        } else {
          res.json({
            ok: false,
            text: "Respuestas no encontradas",
          });
        }
      }
    );
  });
};

module.exports = {
  getPregunta,
  getRespuestaAudio,
  getRespuestaEscrita,
  getRespuestaSeleccion
};
