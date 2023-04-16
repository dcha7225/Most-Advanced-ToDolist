const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();


router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPosts);

router.route("/:id").get(postControllers.getPostById).delete(postControllers.deletePostById);

module.exports = router;