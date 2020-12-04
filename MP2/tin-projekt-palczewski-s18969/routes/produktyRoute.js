const express = require('express');
const router = express.Router();

const produktyControler = require('../controllers/produktyController');

router.get('/', produktyControler.showProduktiaList);
router.get('/add', produktyControler.showAddProduktForm);
router.get('/edit/:idProduktu', produktyControler.showEditProduktForm);
router.get('/details/:idProduktu', produktyControler.showProduktDetails);

module.exports = router;



