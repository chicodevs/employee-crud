const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');


router.post('/employees', employeeController.createEmployee);

router.get('/employees', employeeController.listAllEmployees);

router.get('/employees/:id', employeeController.findEmployeeById);

router.put('/employees/:id', employeeController.updateEmployeeById);

router.delete('/employees/:id', employeeController.deleteEmployeeById);



module.exports = router;