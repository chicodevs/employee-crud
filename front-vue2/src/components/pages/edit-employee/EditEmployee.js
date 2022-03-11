import EmployeeService from '../../../services/EmployeeService';

export default {
  name: 'EditEmployeeComponent',
  data() {
    return {
      employeeForm: {
      },
    };
  },

  mounted() {
    this.getEmployeeById();
  },

  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params;
      const response = await EmployeeService.getEmployeeId(id);

      this.employeeForm = { ...response };
    },
    async updateFormEmployee() {
      await EmployeeService.updateEmployee(this.employeeForm);
      this.$swal({
        title: 'Employee updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};
