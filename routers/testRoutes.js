const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.post("/tests/teacher", testController.testsTeacher);
router.post("/tests/student", testController.testsStudent);
router.post("/addTest", testController.addTest)

