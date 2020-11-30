const express = require('express');
const router = express.Router();

const produktApiController = require('../../api/ProduktAPI');

router.get('/', produktApiController.getProdukty);
router.get('/:produktID', produktApiController.getProduktById);
router.post('/', produktApiController.createProdukt);
router.put('/:produktID', produktApiController.updateProdukt);
router.delete('/:produktID', produktApiController.deleteProdukt);

module.exports = router;