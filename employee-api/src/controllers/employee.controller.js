const db = require('../config/database');

exports.createEmployee = async (req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)',
        [name, job_role, salary, birth, employee_registration]
    );
  
    res.status(201).send({
      message: "Employee added successfully!",
      body: {
        employee: { name, job_role, salary, birth, employee_registration },
      },
    });
  } catch (error) {
    console.error('createEmployee', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
  
};

exports.listAllEmployees = async (req, res) => {
  try {
    const response = await db.query('SELECT * FROM employee ORDER BY name ASC');
    res.status(200).send(response.rows);
  } catch (error) {
    console.error('listAllEmployees', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

exports.findEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
                                    employee_id,
                                    name, 
                                    job_role,
                                    salary,
                                    employee_registration,
                                    to_char(birth, 'yyyy-MM-dd') as birth 
                                    FROM employee WHERE employee_id = $1`, 
    [id]);
    if (!rows.length) {
      throw 'employee_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findEmployeeById', error);
    if (error == 'employee_not_found') {
      res.status(404).send({
        message: "Employee not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

exports.updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    const { rows } = await db.query(`UPDATE employee 
                                    SET name = $1, 
                                    job_role = $2, 
                                    salary = $3, 
                                    birth = $4, 
                                    employee_registration = $5 
                                    WHERE employee_id = $6`,
      [name, job_role, salary, birth, employee_registration, id]
    );
    res.status(200).send({ message: "Employee Updated Successfully!" });
  } catch (error) {
    console.error('updateEmployeeById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};


exports.deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM employee WHERE employee_id = $1", [id]);
    res.status(200).send({ message: "Employee deleted successfully!" });
  } catch (error) {
    console.error('deleteEmployeeById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};