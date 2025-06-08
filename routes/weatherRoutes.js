import express from "express";
import { query } from "express-validator";
import { getWeatherCity }from "../controllers/weatherController.js";
import errorValidation from "../middlewares/errorValidation.js";

const router = express.Router();

router.get(
  "/",
  [
    query("city")
      .notEmpty().withMessage("City name is required")
      .isString().withMessage("City name must be a string"),
  ],
  errorValidation,
  getWeatherCity
);
export default router;
