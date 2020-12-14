const express = require('express');
const router = express.Router();

const zamowieniaControler = require('../controllers/zamowieniaController');

router.get('/', zamowieniaControler.showZamowieniaList);
router.get('/add', zamowieniaControler.showZamowieniaForm);
router.get('/edit/:idZamowienie', zamowieniaControler.showEditZamowieniaForm);
router.get('/details/:idZamowienie', zamowieniaControler.showZamowieniaDetails);

router.post('/add', zamowieniaControler.addZamowienia);
router.post('/edit', zamowieniaControler.updateZamowienia);
router.get('/delete/:idZamowienie', zamowieniaControler.deleteZamowienia);

module.exports = router;



