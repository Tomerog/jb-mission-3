import { Router } from "express";
import validation from "../middlewares/validation";
import { getPerGroupValidator, newMeetingValidator } from "../controllers/meetings/validator";
import paramsValidation from "../middlewares/params-validation";
import {
  add,
  getPerGroup,
} from "../controllers/meetings/controller";

const router = Router();

router.get(
  "/:groupId",
  paramsValidation(getPerGroupValidator),
  getPerGroup
);
router.post("/", validation(newMeetingValidator), add);

export default router