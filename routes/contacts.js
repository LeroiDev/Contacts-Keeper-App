// CRUD route
const express = require("express");
const router = express.Router();

// @Route     GET api/contacts
// @desc      GET all users contacts for specific user
// @access    Private

router.get("/", (req, res) => {
  res.send("get all contacts for spesific logged in user");
});

// @Route     Post api/contacts
// @desc      Add contact to contacts for logged in user
// @access    Private
router.post("/", (req, res) => {
  res.send("Add contact to logged in users contacts");
});

// @Route     PUT api/contacts/:id
// @desc      GET all users contacts for specific user
// @access    Private

router.put("/:id", (req, res) => {
  res.send("update a selected contact from logged in user contacts");
});

// @Route     DELETE api/contacts/:id
// @desc      GET all users contacts for specific user
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("DELETE selected contact from logged in user");
});

module.exports = router;
