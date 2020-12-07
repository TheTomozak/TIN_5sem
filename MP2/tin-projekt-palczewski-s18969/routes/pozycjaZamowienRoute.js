const express = require('express');
const router = express.Router();

const pozycjaZamowienControler = require('../controllers/pozycjaZamowienController');

router.get('/', pozycjaZamowienControler.showPozycjaZamowieniaList);
router.get('/add', pozycjaZamowienControler.showPozycjaZamowieniaForm);
router.get('/edit/:idPozycjaZamowien', pozycjaZamowienControler.showEditPozycjaZamowieniaForm);
router.get('/details/:idPozycjaZamowien', pozycjaZamowienControler.showPozycjaZamowieniaDetails);


module.exports = router;



