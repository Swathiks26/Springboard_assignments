const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  registerDog,
  adoptDog,
  removeDog,
  listRegisteredDogs,
  listAdoptedDogs,
} = require("../controllers/dogController");
const router = express.Router();

router.use(protect);

router.post("/", registerDog);
router.post("/:id/adopt", adoptDog);
router.delete("/:id", removeDog);
router.get("/registered", listRegisteredDogs);
router.get("/adopted", listAdoptedDogs);

module.exports = router;
