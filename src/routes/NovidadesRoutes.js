const express = require('express');
const router = express.Router();

const NovidadesController = require('../controller/NovidadesController'); 
const NovidadesValidation = require('../middlewares/NovidadesValidation');

router.post('/', NovidadesValidation, NovidadesController.create);

router.put('/:id', NovidadesValidation, NovidadesController.update);

router.get('/:id', NovidadesController.show);

router.delete('/:id',       NovidadesController.delete);

router.put('/:id/:done',    NovidadesController.done);

router.get('/filter/all/:macaddress',   NovidadesController.all);

router.get('/filter/late/:macaddress',  NovidadesController.late);

router.get('/filter/today/:macaddress', NovidadesController.today);

router.get('/filter/week/:macaddress',  NovidadesController.week);

router.get('/filter/month/:macaddress', NovidadesController.month);
 
router.get('/filter/year/:macaddress',  NovidadesController.year);

module.exports = router; 