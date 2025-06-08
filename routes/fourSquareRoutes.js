import express from "express";
import { query } from "express-validator";
import { getFourSquareData } from "../controllers/fourSquareController.js";
import errorValidation from "../middlewares/errorValidation.js";

const router = express.Router();
router.get(
  "/",
  [
    query("nameCity")
      .notEmpty().withMessage("Name City parameter is required")
      .isString().withMessage("Name City must be a string"),
  ],
  errorValidation,
  getFourSquareData
);
export default router;
