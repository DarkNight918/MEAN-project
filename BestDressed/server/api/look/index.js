'use strict';

var controller = require('./look.controller');
var express = require('express');
var router = express.Router();

router.post('/scrapeUpload', controller.scrapeUpload);
router.post('/upload', controller.upload);

router.put('/:id', controller.update);
router.put('/upvote/:id', controller.addUpvote);

router.get('/getUserLooks', controller.userLooks);
router.get('/getAllLooks', controller.allLooks);
router.get('/:lookId', controller.singleLook);
router.get('/popLooks/:id', controller.popLooks);

router.delete('/:id', controller.delete);

module.exports = router;













