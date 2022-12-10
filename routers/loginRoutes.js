const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");


router.get("/signup",homeController.signup)
router.get("/login", homeController.login) 