const { createCat, getAllCats } = require("../controllers/catsContoller");

const router = require("express").Router();

router.post("/", createCat);
router.get("/", getAllCats);

module.exports = router;
