import { Router } from "express";
import { getPath } from "../utils/getPath.js";

const router = Router()
const filePath = getPath("../public/html/documentation.html");

router.get('/', (req, res) => {
  res.sendFile(filePath);
});

export default router;