const express = require("express");
const router = express.Router();
const region = require("../controllers/region");

router.get("/", region.getAllRegions);

router.get("/:id", region.getRegionById);

router.post("/", region.postRegion);

router.put("/:id", region.updateRegion);

router.delete("/:id", region.deleteRegion);

module.exports = router;
