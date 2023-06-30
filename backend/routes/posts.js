const { getPost, updatePost, deletePost, createPost, getAllPost } = require("../controllers/postsController");

const router = require("express").Router();

router.route("/:id").get(getPost).put(updatePost).delete(deletePost);
router.route("/").post(createPost).get(getAllPost);

module.exports = router;
