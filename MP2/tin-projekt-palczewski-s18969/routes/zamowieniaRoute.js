const express = require('express');
const router = express.Router();

const zamowieniaControler = require('../controllers/zamowieniaController');

router.get('/', zamowieniaControler.showZamowieniaList);
router.get('/add', zamowieniaControler.showAddZamowieniaForm);
router.get('/details/:empId', zamowieniaControler.showZamowieniaDetails);

module.exports = router;



