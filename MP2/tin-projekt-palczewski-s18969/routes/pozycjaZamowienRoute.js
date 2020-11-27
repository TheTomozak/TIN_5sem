const express = require('express');
const router = express.Router();

const pozycjaZamowienControler = require('../controllers/pozycjaZamowien');

router.get('/', pozycjaZamowienControler.showPozycjaZamowienList);
router.get('/add', pozycjaZamowienControler.showAddPozycjaZamowienForm);
router.get('/details/:empId', pozycjaZamowienControler.showPozycjaZamowienDetails);

module.exports = router;



