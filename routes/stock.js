const express = require("express");
const router = express.Router();
const st = require("../controllers/stock");

router.get("/", st.getAllSt);

router.post("/", st.postSt);

router.get("/:id", st.getStById);

router.put("/:id", st.updateSt);

router.delete("/:id", st.deleteSt);

module.exports = router;
