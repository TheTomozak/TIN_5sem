const express = require('express');
const router = express.Router();

const zamowienieProduktApiController = require('../../api/ZamowienieProduktyAPI');


router.get('/', zamowienieProduktApiController.getZamowieniaProdukty);
router.get('/:zamowieniaProduktyID', zamowienieProduktApiController.getZamowieniaProduktyById);
router.post('/', zamowienieProduktApiController.createZamowieniaProdukty);
router.put('/:zamowieniaProduktyID', zamowienieProduktApiController.updateZamowieniaProdukty);
router.delete('/:zamowieniaProduktyID', zamowienieProduktApiController.deleteZamowieniaProdukty);

module.exports = router;