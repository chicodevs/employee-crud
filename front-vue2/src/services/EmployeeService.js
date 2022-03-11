import Api from './Api';

export default {
  
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async updateEmployee(employee) {
    try {
      const id = employee.employee_id;
      const response = await Api().put(`/employees/${id}`, employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};