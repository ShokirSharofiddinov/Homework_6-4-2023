const express = require("express");
const router = express.Router();
const ph = require("../controllers/pharmacy");

router.get("/", ph.getAllPh);

router.post("/", ph.postPh);

router.get("/:id", ph.getPhById);

router.put("/:id", ph.updatePh);

router.delete("/:id", ph.deletePh);

module.exports = router;
