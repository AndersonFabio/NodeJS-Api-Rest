const express = require('express');
const router = express.Router();

const InformacoesController = require('../controller/InformacoesController'); 
const InformacoesValidation = require('../middlewares/InformacoesValidation');

router.post('/', InformacoesValidation, InformacoesController.create);

router.put('/:id', InformacoesValidation, InformacoesController.update);

router.get('/:id', InformacoesController.show);

router.delete('/:id',       InformacoesController.delete);

router.put('/:id/:done',    InformacoesController.done);

router.get('/filter/all/:macaddress',   InformacoesController.all);

router.get('/filter/late/:macaddress',  InformacoesController.late);

router.get('/filter/today/:macaddress', InformacoesController.today);

router.get('/filter/week/:macaddress',  InformacoesController.week);

router.get('/filter/month/:macaddress', InformacoesController.month);
 
router.get('/filter/year/:macaddress',  InformacoesController.year);

module.exports = router; 