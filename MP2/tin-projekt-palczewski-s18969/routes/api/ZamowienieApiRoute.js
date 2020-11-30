const express = require('express');
const router = express.Router();

const zamowienieApiController = require('../../api/ZamowienieAPI');


router.get('/', zamowienieApiController.getZamowienia);
router.get('/:zamowienieId', zamowienieApiController.getZamowienieById);
router.post('/', zamowienieApiController.createZamowienie);
router.put('/:zamowienieId', zamowienieApiController.updateZamowienie);
router.delete('/:zamowienieId', zamowienieApiController.deleteZamowienie);

module.exports = router;