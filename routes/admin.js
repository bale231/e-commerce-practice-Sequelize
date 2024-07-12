const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

// ROUTES FOR ADMIN AREA
router.post("/add-user", adminController.postAddUser);

module.exports = router;