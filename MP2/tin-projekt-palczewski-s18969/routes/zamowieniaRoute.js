const express = require('express');
const router = express.Router();

const zamowienieControler = require('../controllers/zamowienieController');

router.get('/', zamowienieControler.showZamowieniaList);
router.get('/add', zamowienieControler.showAddZamowieniaForm);
router.get('/details/:empId', zamowienieControler.showZamowieniaDetails);

module.exports = router;

