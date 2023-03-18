/* eslint-disable comma-dangle */
const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");

const { translateContent } = require("../controllers/translations");

router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      prompt: Joi.string().required().min(1).max(100),
    }),
  }),
  translateContent
);

module.exports = router;
