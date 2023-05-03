const express = require("express");
const getControllers = require("../controllers/getControllers");
const router = express.Router();

router.route("/:id").get(getControllers.getById)

module.exports = router;