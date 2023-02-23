import express from "express";
const router = express.Router();

import studentController from "./controller/index.js";

router.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a new Student
router.post("/add", studentController.add);
router.get("/retrieveAll", studentController.retrieveAll);
router.get("/retrieveOne/:id", studentController.retrieveOne);
router.put("/update/:id", studentController.update);
router.delete("/delete/:id", studentController.delete);

export default router;
