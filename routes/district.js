const express = require("express");
const router = express.Router();
const district = require("../controllers/district");

router.get("/", district.getAllDistrict);

router.get("/:id", district.getDistrictById);

router.post("/", district.postDistrict);

router.put("/:id", district.updateDistrict);

router.delete("/:id", district.deleteDistrict);

module.exports = router;
