const express = require("express");
const router = express.Router();
const mdt = require("../controllers/medicinetype");

router.get("/", mdt.getAllMedType);

router.get("/:id", mdt.getMedTypeById);

router.post("/", mdt.postMedType);

router.put("/:id", mdt.updateMedType);

router.delete("/:id", mdt.deleteMedType);

module.exports = router;
