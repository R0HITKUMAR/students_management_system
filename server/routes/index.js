import express from "express";
const router = express.Router();

import studentRoutes from "../src/student/routes.js";

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/student", studentRoutes);

export default router;
