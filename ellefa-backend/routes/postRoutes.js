const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();


router.route("/").post(postControllers.createNewPosts).put(postControllers.updatePostById);

router.route("/:id").get(postControllers.getPostById)

module.exports = router;