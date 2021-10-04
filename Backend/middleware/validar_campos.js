const { validationResult } = require("express-validator");

const validacion = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  next();
};

module.exports = {
  validacion
};
