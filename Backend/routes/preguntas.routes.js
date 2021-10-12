const { Router } = require("express");
const {
  getPregunta,
  getRespuestaAudio,
  getRespuestaSeleccion,
  getRespuestaEscrita,
} = require("../controllers/preguntas.controller");

const router = Router();

//GetPreegunta
router.get("/pregunta/:dificultad/:topic", getPregunta);


//Obtener opciones para la pregunta
router.get("/ejercicio_audio/:id", getRespuestaAudio);
router.get("/ejercicio_seleccion/:id", getRespuestaSeleccion);
router.get("/ejercicio_escrito/:id", getRespuestaEscrita);

module.exports = router;
