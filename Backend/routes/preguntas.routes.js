const { Router } = require("express");
const {
  getPregunta,
  getRespuestaAudio,
  getRespuestaSeleccion,
  getRespuestaEscrita,
} = require("../controllers/preguntas.controller");

const router = Router();

router.get("/pregunta/:dificultad", getPregunta);
router.get("/ejercicio_audio/:id", getRespuestaAudio);
router.get("/ejercicio_seleccion/:id", getRespuestaSeleccion);
router.get("/ejercicio_escrito/:id", getRespuestaEscrita);

module.exports = router;
