import express from "express";
import { query } from "express-validator";
import { getPlaces } from "../controllers/geoNamesController.js";
import errorValidation from "../middlewares/errorValidation.js";

const router = express.Router();
router.get(
  "/",
  [
    query("name")
      .notEmpty().withMessage("Name of site parameter is required")
      .isString().withMessage("Name of site must be a string"),
  ],
  errorValidation,
  getPlaces
);
export default router;
