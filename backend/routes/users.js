const { deleteUser, updateUser, getUser } = require("../controllers/usersController");

const router = require("express").Router();

router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);

module.exports = router;
