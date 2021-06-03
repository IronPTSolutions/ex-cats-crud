const express = require('express');
const cats = require('../controllers/cats.controller');

const router = express.Router();

router.get('/cats', cats.list);

router.get('/cats/new', cats.create);
router.post('/cats', cats.doCreate);

router.get('/cats/:id/edit', cats.edit);
router.post('/cats/:id/edit', cats.doEdit);

router.post('/cats/:id/delete', cats.delete);

module.exports = router;
