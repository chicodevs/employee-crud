const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');


router.post('/employees', employeeController.createEmployee);



module.exports = router;