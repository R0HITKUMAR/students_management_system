import express from "express";
const router = express.Router();

import db from "../../../services/db.js";
import "../model/index.js";

router.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a new Student
router.add =  (req, res) => {
  const data = req.body;
  const sql_insert = `INSERT INTO Students (name, class, email, phone, address) VALUES (?, ?, ?, ?, ?)`;

  db.run(
    sql_insert,
    [data.name, data.class, data.email, data.phone, data.address],
    (err) => {
      if (err) {
        res.status(400).send("Unable to add Student");
      }
      console.log("Student added successfully");
    }
  );
  res.status(201).send("Student added successfully");
};

// Retrieve all Students
router.retrieveAll = (req, res) => {
  const sql_select = `SELECT * FROM Students`;
  db.all(sql_select, [], (err, rows) => {
    if (err) {
      res.status(400).send("Unable to retrieve Students");
    }
    res.status(200).send(rows);
  });
};

// Retrieve a single Student with id
router.retrieveOne = (req, res) => {
  const sql_select = `SELECT * FROM Students WHERE id = ?`;
  db.get(sql_select, [req.params.id], (err, row) => {
    if (err) {
      res.status(400).send("Unable to retrieve Student");
    }
    res.status(200).send(row);
  });
};

// Update a Student with id
router.update = (req, res) => {
  const sql_update = `UPDATE Students SET name = ?, class = ?, email = ?, phone = ?, address = ? WHERE id = ?`;
  db.run(
    sql_update,
    [
      req.body.name,
      req.body.class,
      req.body.email,
      req.body.phone,
      req.body.address,
      req.params.id,
    ],
    (err) => {
      if (err) {
        res.status(400).send("Unable to update Student");
      }
      res.status(200).send("Student updated successfully");
    }
  );
};

// Delete a Student with id
router.delete = (req, res) => {
  const sql_delete = `DELETE FROM Students WHERE id = ?`;
  db.run(sql_delete, [req.params.id], (err) => {
    if (err) {
      res.status(400).send("Unable to delete Student");
    }
    res.status(200).send("Student deleted successfully");
  });
};

export default router;
