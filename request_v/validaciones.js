const { body } = require("express-validator");

const reportCheck = () => {
  return [
    body("investigador_id")
      .trim()
      .notEmpty()
      .withMessage("investigador_id requerido")
      .isInt()
      .withMessage("investigador_id no es un entero"),
    body("nombre")
      .trim()
      .notEmpty()
      .withMessage("Nombre requerido")
      .isLength({ max: 10 })
      .withMessage("Nombre no puede pasar de 10 caracteres"),
    body("codigo")
      .trim()
      .notEmpty()
      .withMessage("codigo requerido")
      .isLength({ max: 45 }),
    body("facultad")
      .trim()
      .notEmpty()
      .withMessage("facultad requerido")
      .isLength({ max: 70 }),
    body("instituto")
      .trim()
      .notEmpty()
      .withMessage("instituto requerido")
      .isLength({ max: 80 }),
    body("linea_investicacion")
      .trim()
      .notEmpty()
      .withMessage("linea_investicacion requerido")
      .isLength({ max: 245 }),
    body("horas_semanales_contratadas")
      .trim()
      .notEmpty()
      .withMessage("horas_semanales_contratadas requerido")
      .isInt(),
    body("fecha_inicio")
      .trim()
      .notEmpty()
      .withMessage("fecha_inicio requerido")
      .isISO8601()
      .toDate()
      .withMessage("fecha_inicio formarto YYYY-MM-DD"),
    body("duracion_semestres")
      .trim()
      .notEmpty()
      .withMessage("duracion_semestres requerido")
      .isInt(),
    body("fecha_final")
      .trim()
      .notEmpty()
      .withMessage("fecha_final requerido")
      .isISO8601()
      .toDate()
      .withMessage("fecha_final formarto YYYY-MM-DD"),
    body("intitutos_participantes")
      .optional()
      .isLength({ max: 200 })
      .withMessage("intitutos_participantes no puede pasar de 200 caracteres"),
    body("entidad_financiera_n")
      .trim()
      .notEmpty()
      .withMessage("entidad_financiera_n requerido")
      .isLength({ max: 100 }),
    body("entidad_financiera_i")
      .trim()
      .notEmpty()
      .withMessage("entidad_financiera_i requerido")
      .isLength({ max: 100 }),
  ];
};

const searcherCheck = () => {
  return [
    body("nombre")
      .trim()
      .notEmpty()
      .withMessage("Nombre requerido")
      .isLength({ max: 100 })
      .withMessage("Nombre no puede pasar de 100 caracteres"),
    body("apellido")
      .trim()
      .notEmpty()
      .withMessage("apellido requerido")
      .isLength({ max: 100 })
      .withMessage("apellido no puede pasar de 100 caracteres"),
    body("cedula")
      .trim()
      .notEmpty()
      .withMessage("cedula requerido")
      .isLength({ max: 14 })
      .withMessage("cedula no puede pasar de 14 caracteres"),
    body("telefono")
      .trim()
      .notEmpty()
      .withMessage("telefono requerido")
      .isLength({ max: 11 })
      .withMessage("telefono no puede pasar de 11 caracteres"),
    body("direccion")
      .trim()
      .notEmpty()
      .withMessage("direccion requerido")
      .isLength({ max: 250 })
      .withMessage("direccion no puede pasar de 250 caracteres"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("email requerido")
      .isLength({ max: 50 })
      .withMessage("email no puede pasar de 50 caracteres")
  ];
};

module.exports = { reportCheck, searcherCheck };
