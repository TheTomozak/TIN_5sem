const express = require('express');
const router = express.Router();
const authUtils = require('../util/authUtils');


const produktyControler = require('../controllers/produktyController');

router.get('/', produktyControler.showProduktiaList);
router.get('/add', authUtils.permitAuthenticatedUser, produktyControler.showAddProduktForm);
router.get('/edit/:idProduktu', authUtils.permitAuthenticatedUser, produktyControler.showEditProduktForm);
router.get('/details/:idProduktu', produktyControler.showProduktDetails);

router.post('/add',authUtils.permitAuthenticatedUser, produktyControler.addProdukt);
router.post('/edit',authUtils.permitAuthenticatedUser, produktyControler.updateProdukt);
router.get('/delete/:idProduktu',authUtils.permitAuthenticatedUser, produktyControler.deleteProdukt);

module.exports = router;



