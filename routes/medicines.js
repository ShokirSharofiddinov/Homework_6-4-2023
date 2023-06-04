const express = require("express");
const router = express.Router();
const md = require("../controllers/medicines");

router.get("/", md.getAllMd);

router.get("/:id", md.getMdById);

router.post("/", md.postMd);

router.put("/:id", md.updateMd);

router.delete("/:id", md.deleteMd);

module.exports = router;
