const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const stuffCrtl = require('../controllers/stuffcontrollers');


router.post('/', stuffCrtl.createThing);

router.put('/:id', stuffCrtl.modifyThing);

router.delete('/:id', auth, stuffCrtl.deleteThing);

router.get('/:id', auth, stuffCrtl.getOneThing);

router.get('/', stuffCrtl.getAllThing);

router.get('/', stuffCrtl.getAllThingResolved);


module.exports = router;