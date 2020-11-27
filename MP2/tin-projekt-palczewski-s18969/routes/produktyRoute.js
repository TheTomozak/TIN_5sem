const express = require('express');
const router = express.Router();

const produktyControler = require('../controllers/produktyController');

router.get('/', produktyControler.showProduktiaList);
router.get('/add', produktyControler.showAddProduktForm);
router.get('/details/:empId', produktyControler.showProduktDetails);

module.exports = router;



