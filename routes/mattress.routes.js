const express = require('express');
const router = express.Router();

const mattressCtrl = require('../controllers/mattress.controller');

router.get('/', mattressCtrl.list);
router.post('/', mattressCtrl.create);
router.get('/:id', mattressCtrl.read);
router.put('/:id', mattressCtrl.update);
router.delete('/:id', mattressCtrl.delete);

module.exports = router;