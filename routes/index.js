const express = require('express');
const router = express.Router();

const region = require("./region")
router.use("/region", region);

const district = require("./district")
router.use("/district", district);

const pharmacy = require("./pharmacy");
router.use("/pharmacy", pharmacy);

const stock = require("./stock");
router.use("/stock", stock);

const medicines = require("./medicines");
router.use("/medicines", medicines);

const medicineType = require("./medicinetype");
router.use("/medicinetype", medicineType);

module.exports = router;
