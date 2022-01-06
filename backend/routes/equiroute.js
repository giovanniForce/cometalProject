const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const equiCrtl = require('../controllers/equiControllers');


router.post('/', equiCrtl.createEqui);

router.put('/:id', equiCrtl.modifyEqui);

router.delete('/:id', auth, equiCrtl.deleteEqui);

router.get('/:id', auth, equiCrtl.getOneEqui);

router.get('/', equiCrtl.getAllEqui);

module.exports = router;