/**
 * Created by cendawei on 2017/4/28.
 */
const express = require('express');
const router = express.Router();
const path = require('path')
const stopController = require('../controllers/stop');

/* GET users listing. */
router.get('/list', stopController.getList)
router.get('/tabs', stopController.getTabs)

module.exports = router;
