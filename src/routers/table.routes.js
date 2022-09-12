const {save,allValue} = require("../controllers/table.controllers")
const express =require("express");
const router = express.Router();

router.post("/save",save);
router.get("/get",allValue)
module.exports =router