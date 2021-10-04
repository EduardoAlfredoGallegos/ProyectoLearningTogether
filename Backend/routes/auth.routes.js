const { Router } = require('express');
const { renuevaToken, registro, login } = require('../controllers/authController');
const { valitarJWT } = require("../middlewares/validar-jwt");
const { check } = require('express-validator');
const { validar } =  require('../middlewares/validar_campos');

const router = Router();

router.post('/login', [
    check('correo','El correo es obligatorio').not().isEmpty().isEmail(),
    check('contrasena','La contraseña es obligatoria').not().isEmpty(),
    validar
],  
login);  
router.post('/register', [
    check('correo','El correo es obligatorio').not().isEmpty().isEmail(),
    check('contrasena','La contraseña es obligatoria').not().isEmpty().isLength({min:8}),
    check('nombre_usuario','El nombre es obligatorio').not().isEmpty(),
    validar
],
registro);
router.get('/renew', valitarJWT, renuevaToken);

module.exports = router;
