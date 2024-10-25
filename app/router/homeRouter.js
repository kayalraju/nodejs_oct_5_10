const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();


router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

module.exports = router;