const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

router.route("/").post(postControllers.createNewPosts).put(postControllers.updatePostById);

module.exports = router;