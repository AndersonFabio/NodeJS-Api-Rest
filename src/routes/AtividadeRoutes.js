const express = require('express');
const router = express.Router();

const AtividadeController = require('../controller/AtividadeController'); 
const AtividadeValidation = require('../middlewares/AtividadeValidation');

router.post('/', AtividadeValidation, AtividadeController.create);

router.put('/:id', AtividadeValidation, AtividadeController.update);

router.get('/:id', AtividadeController.show);

router.delete('/:id',       AtividadeController.delete);

router.put('/:id/:done',    AtividadeController.done);

router.get('/filter/all/:macaddress',   AtividadeController.all);

router.get('/filter/late/:macaddress',  AtividadeController.late);

router.get('/filter/today/:macaddress', AtividadeController.today);

router.get('/filter/week/:macaddress',  AtividadeController.week);

router.get('/filter/month/:macaddress', AtividadeController.month);
 
router.get('/filter/year/:macaddress',  AtividadeController.year);

module.exports = router; 