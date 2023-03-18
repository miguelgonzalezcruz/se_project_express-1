require("dotenv").config();

const { Joi } = require("celebrate");
const cors = require("cors");
const express = require("express");

const helmet = require("helmet");
const { celebrate } = require("celebrate");

const limiter = require("./middlewares/limiter");

const { translateContent } = require("./controllers/translations");

const { PORT = 3001 } = process.env;

const app = express();

const allowedOrigins = ["http://localhost:3000"];

app.use(cors({ origin: allowedOrigins }));

// app.use(limiter);
// app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      prompt: Joi.string().required().min(1).max(100),
    }),
  }),
  translateContent
);

app.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
