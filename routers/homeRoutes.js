const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const testController = require("../controllers/testController");

router.get("/", homeController.getRoot);

